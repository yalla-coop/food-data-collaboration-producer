import loadConnectorWithResources from '../../../connector/index.js';
import { OrderLine, Order } from '@datafoodconsortium/connector';

export async function extractOrderLine(payload) {
    const connector = await loadConnectorWithResources();

    const deserialised = await connector.import(payload);

    if (deserialised.length !== 1 || !(deserialised[0] instanceof OrderLine)) {
        throw Error('Single OrderLine not present in graph');
    }

    return deserialised[0];
}

export async function extractOrderAndLines(payload) {
    const connector = await loadConnectorWithResources();

    const deserialised = await connector.import(payload);

    const orders = deserialised.filter(
        (item) => item instanceof Order
    );

    const lines = deserialised.filter(
        (item) => item instanceof OrderLine
    );

    if (orders.length !== 1) {
        throw Error('Order missing');
    }

    const order = orders[0];

    if ((await order.getLines()).length !== lines.length) {
        throw Error('Graph is missing OrderLine');
    }

    return order;
}

function createOrderLine(connector, line, lineIdMappings, shopName, orderId) {

    const suppliedProduct = connector.createSuppliedProduct({
        semanticId: `${process.env.PRODUCER_SHOP_URL}api/dfc/Enterprises/${shopName}/SuppliedProducts/${numericPortion(line.variant.id)}`
    });

    const madeUpIdForTheOfferSoTheConnectorWorks = `/api/dfc/Enterprises/${shopName}/offers/#${lineIdMappings[line.id].toString()}`

    const offer = connector.createOffer({
        semanticId: madeUpIdForTheOfferSoTheConnectorWorks,
        offeredItem: suppliedProduct
    });

    const { amount, currencyCode } = line.originalUnitPriceSet.shopMoney;

    const price = connector.createPrice({
        value: amount,
        unit: currencyMeasureFor(connector, currencyCode)
    });

    return [
        offer,
        connector.createOrderLine({
            semanticId: `${process.env.PRODUCER_SHOP_URL}api/dfc/Enterprises/${shopName}/Orders/${orderId}/orderLines/${lineIdMappings[line.id].toString()}`,
            offer: offer,
            price: price,
            quantity: line.quantity
        })];
}

function createOrderLines(connector, shopifyDraftOrderResponse, lineIdMappings, shopName, orderId) {
    const shopifyLineItems = shopifyDraftOrderResponse.lineItems.edges;
    return shopifyLineItems.flatMap(({ node: line }) => {
        return createOrderLine(connector, line, lineIdMappings, shopName, orderId);
    })
}

export async function createDfcOrderFromShopify(shopifyDraftOrderResponse, lineIdMappings, shopName) {
    const connector = await loadConnectorWithResources();

    const orderId = numericPortion(shopifyDraftOrderResponse.id)

    const dfcOrderLinesGraph = createOrderLines(connector, shopifyDraftOrderResponse, lineIdMappings, shopName, orderId);

    const order = connector.createOrder({
        semanticId: `${process.env.PRODUCER_SHOP_URL}api/dfc/Enterprises/${shopName}/Orders/${orderId}`,
        lines: dfcOrderLinesGraph.filter((item) => item instanceof OrderLine)
    });

    return await connector.export([order, ...dfcOrderLinesGraph]);
}

export async function createDfcOrderLinesFromShopify(shopifyDraftOrderResponse, lineIdMappings, shopName, orderId) {
    const connector = await loadConnectorWithResources();

    const dfcOrderLines = createOrderLines(connector, shopifyDraftOrderResponse, lineIdMappings, shopName, orderId);

    return await connector.export(dfcOrderLines);
}

export async function createDfcOrderLineFromShopify(shopifyDraftOrderResponse, externalLineId, lineIdMappings, shopName, orderId) {
    const connector = await loadConnectorWithResources();

    const line = shopifyDraftOrderResponse.lineItems.edges.find(({ node: line }) => lineIdMappings[line.id] === externalLineId)?.node

    if (!line) {
        return null;
    }

    return await connector.export(createOrderLine(connector, line, lineIdMappings, shopName, orderId));
}

function numericPortion(id) {
    return id.substring(id.lastIndexOf('/') + 1);
}

function currencyMeasureFor(connector, currencyCode) {
    const measure = {
        'EUR': connector.MEASURES.UNIT.CURRENCYUNIT.EURO,
        'GBP': connector.MEASURES.UNIT.CURRENCYUNIT.POUNDSTERLING,
        'USD': connector.MEASURES.UNIT.CURRENCYUNIT.USDOLLAR
    }[currencyCode];

    if (!measure) {
        throw new Error(`Unknown connector currency mapping for currenct code ${currencyCode}`);
    }

    return measure;
}