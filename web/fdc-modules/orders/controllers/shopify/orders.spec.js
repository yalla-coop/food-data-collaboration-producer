import { Offer, OrderLine } from '@datafoodconsortium/connector';
import loadConnectorWithResources from '../../../../connector/index.js';
import {createUpdatedShopifyLines} from './orders.js'

describe('createUpdatedShopifyLines', () => {
    it('Will merge existing lines with a new dfc line to produce the shopify order line input shape', async () => {
        const connector = await loadConnectorWithResources();
        const draftOrder = {
            id: 12345,
            lineItems: {
                edges: [
                    {
                        node: {
                            id: 1234,
                            quantity: 5,
                            variant: {
                                id: "gid://shopify/ProductVariant/99",
                                title: '500g x 12',
                                price: 55.603
                            }
                        }
                    },
                    {
                        node: {
                            id: 5678,
                            quantity: 6,
                            variant: {
                                id: "gid://shopify/ProductVariant/100",
                                title: '99g',
                                price: 25
                            }
                        }
                    }
                ]
            }
        };
        
        const newDfcLine = new OrderLine({
            connector,
            semanticId: 'http://test.host/api/dfc/Enterprises/10000/Orders/10001/orderlines/10001-01',
            quantity: 7,
            offer: new Offer({ connector, semanticId: "999" })
        });

        expect(await createUpdatedShopifyLines(draftOrder, newDfcLine)).toStrictEqual([
            {variantId: "gid://shopify/ProductVariant/99", quantity: 5},
            {variantId: "gid://shopify/ProductVariant/100", quantity: 6},
            {variantId: "gid://shopify/ProductVariant/999", quantity: 7},
        ]);
    });
});