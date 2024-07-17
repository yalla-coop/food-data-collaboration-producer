import loadConnectorWithResources from '../../../connector/index.js';
import { OrderLine, Order, SaleSession } from '@datafoodconsortium/connector';
import * as ids from '../controllers/shopify/ids.js'

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

    const saleSessions = deserialised.filter(
        (item) => item instanceof SaleSession
    );

    if (orders.length !== 1) {
        throw Error('Order missing');
    }

    const order = orders[0];

    if ((await order.getLines()).length !== lines.length) {
        throw Error('Graph is missing OrderLine');
    }

    if (saleSessions.length !== 1) {
        throw Error('Graph must contain single SalesSession');
    }

    return {order, saleSession: saleSessions[0]};
}

function createOrderLine(connector, line, lineIdMappings, enterpriseName, orderId) {

    const suppliedProduct = connector.createSuppliedProduct({
        semanticId: `${process.env.PRODUCER_SHOP_URL}api/dfc/Enterprises/${enterpriseName}/SuppliedProducts/${ids.extract(line.variant.id)}`
    });

    const madeUpIdForTheOfferSoTheConnectorWorks = `/api/dfc/Enterprises/${enterpriseName}/offers/#${lineIdMappings[ids.extract(line.id)].toString()}`

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
            semanticId: `${process.env.PRODUCER_SHOP_URL}api/dfc/Enterprises/${enterpriseName}/Orders/${orderId}/orderLines/${lineIdMappings[ids.extract(line.id)].toString()}`,
            offer: offer,
            price: price,
            quantity: line.quantity
        })];
}

function createOrderLines(connector, shopifyDraftOrderResponse, lineIdMappings, enterpriseName, orderId) {
    const shopifyLineItems = shopifyDraftOrderResponse.lineItems.edges;
    return shopifyLineItems.flatMap(({ node: line }) => {
        return createOrderLine(connector, line, lineIdMappings, enterpriseName, orderId);
    })
}

async function createUnexportedDfcOrderFromShopify(shopifyDraftOrderResponse, lineIdMappings, enterpriseName) {
    const connector = await loadConnectorWithResources();

    const orderId = ids.extract(shopifyDraftOrderResponse.id)

    const dfcOrderLinesGraph = createOrderLines(connector, shopifyDraftOrderResponse, lineIdMappings, enterpriseName, orderId);

    const order = connector.createOrder({
        semanticId: `${process.env.PRODUCER_SHOP_URL}api/dfc/Enterprises/${enterpriseName}/Orders/${orderId}`,
        lines: dfcOrderLinesGraph.filter((item) => item instanceof OrderLine),
        orderStatus: orderStatusFor(connector, shopifyDraftOrderResponse.status)
    });

    return [order, ...dfcOrderLinesGraph];
}

export async function createDfcOrderFromShopify(shopifyDraftOrderResponse, lineIdMappings, enterpriseName) {
    const connector = await loadConnectorWithResources();
    const graph = await createUnexportedDfcOrderFromShopify(shopifyDraftOrderResponse, lineIdMappings, enterpriseName);
    return await connector.export(graph);
}

export async function createBulkDfcOrderFromShopify(shopifyDraftOrderResponses, lineIdMappingsByDraftId, enterpriseName) {
    const connector = await loadConnectorWithResources();
    const megaGraph = await (Promise.all(shopifyDraftOrderResponses.map(async draftOrderResponse => {
        const lineItemIdMapping = lineIdMappingsByDraftId.find(({draftOrderId}) => draftOrderId === ids.extract(draftOrderResponse.id));

        if (!lineItemIdMapping) {
            throw Error("Weird inconsistency. No stored line litems found for draft Id " + draftOrderResponse.id);
        }

        return await createUnexportedDfcOrderFromShopify(draftOrderResponse, lineItemIdMapping.lineItems, enterpriseName)
    })));

    return await connector.export(megaGraph.flat());
}

export async function createDfcOrderLinesFromShopify(shopifyDraftOrderResponse, lineIdMappings, enterpriseName, orderId) {
    const connector = await loadConnectorWithResources();

    const dfcOrderLines = createOrderLines(connector, shopifyDraftOrderResponse, lineIdMappings, enterpriseName, orderId);

    return await connector.export(dfcOrderLines);
}

export async function createDfcOrderLineFromShopify(shopifyDraftOrderResponse, externalLineId, lineIdMappings, enterpriseName, orderId) {
    const connector = await loadConnectorWithResources();

    const line = shopifyDraftOrderResponse.lineItems.edges.find(({ node: line }) => lineIdMappings[ids.extract(line.id)] === externalLineId)?.node

    if (!line) {
        return null;
    }

    return await connector.export(createOrderLine(connector, line, lineIdMappings, enterpriseName, orderId));
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

function orderStatusFor(connector, shopifyDraftOrderStatus) {
    const status = {
        'OPEN': connector.VOCABULARY.STATES.ORDERSTATE.HELD,
        'INVOICE_SENT': connector.VOCABULARY.STATES.ORDERSTATE.HELD,
        'COMPLETED': connector.VOCABULARY.STATES.ORDERSTATE.COMPLETE,
    }[shopifyDraftOrderStatus];

    if (!status) {
        throw new Error(`Unknown connector order status mapping for ${shopifyDraftOrderStatus}`);
    }

    return status;

}