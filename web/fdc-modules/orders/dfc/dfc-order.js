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

export async function createDfcOrderFromShopify(shopifyDraftOrderResponse, lineIdMappings) {
    const connector = await loadConnectorWithResources();

    const shopifyLineItems = shopifyDraftOrderResponse.lineItems.edges;

    const dfcOrderLines = shopifyLineItems.map(({node: item}) => {

        const offer = connector.createOffer({
            semanticId: item.variant.id
        });

        const price = connector.createPrice({
            value: item.variant.price,
            unit: connector.MEASURES.UNIT.CURRENCYUNIT.EURO //todo: Shop defaut currency
        });

        return connector.createOrderLine({
            semanticId: lineIdMappings[item.id].toString(),
            offer: offer,
            price: price,
            quantity: item.quantity
        });
    })

    const order = connector.createOrder({
        semanticId: shopifyDraftOrderResponse.id,
        lines: dfcOrderLines
    });

    return await connector.export([order, ...dfcOrderLines]);
}