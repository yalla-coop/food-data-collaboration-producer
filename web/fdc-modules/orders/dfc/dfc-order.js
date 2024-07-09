import loadConnectorWithResources from '../../../connector/index.js';
import { OrderLine, Order } from '@datafoodconsortium/connector';

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

function createOrderLine(connector, line, lineIdMappings) {
    const offer = connector.createOffer({
        semanticId: line.variant.id
    });

    const price = connector.createPrice({
        value: line.variant.price,
        unit: connector.MEASURES.UNIT.CURRENCYUNIT.EURO //todo: Shop defaut currency
    });

    return connector.createOrderLine({
        semanticId: lineIdMappings[line.id].toString(),
        offer: offer,
        price: price,
        quantity: line.quantity
    });
}

function createOrderLines(connector, shopifyDraftOrderResponse, lineIdMappings) {
    const shopifyLineItems = shopifyDraftOrderResponse.lineItems.edges;
    return shopifyLineItems.map(({node: line}) => {
        return createOrderLine(connector, line, lineIdMappings);
    })
}

export async function createDfcOrderFromShopify(shopifyDraftOrderResponse, lineIdMappings) {
    const connector = await loadConnectorWithResources();

    const dfcOrderLines = createOrderLines(connector, shopifyDraftOrderResponse, lineIdMappings);

    const order = connector.createOrder({
        semanticId: shopifyDraftOrderResponse.id,
        lines: dfcOrderLines
    });

    return await connector.export([order, ...dfcOrderLines]);
}

export async function createDfcOrderLinesFromShopify(shopifyDraftOrderResponse, lineIdMappings) {
    const connector = await loadConnectorWithResources();

    const dfcOrderLines = createOrderLines(connector, shopifyDraftOrderResponse, lineIdMappings);

    return await connector.export(dfcOrderLines);
}

export async function createDfcOrderLineFromShopify(shopifyDraftOrderResponse, externalLineId, lineIdMappings) {
    const connector = await loadConnectorWithResources();

    const line = shopifyDraftOrderResponse.lineItems.edges.find(({node: line}) => lineIdMappings[line.id] === externalLineId)?.node

    if (!line){
        return null;
    }

    return await connector.export([createOrderLine(connector, line, lineIdMappings)]);
}