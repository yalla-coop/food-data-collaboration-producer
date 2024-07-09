import loadConnectorWithResources from '../../../connector/index.js';
import { extractOrderAndLines, createDfcOrderFromShopify } from './dfc-order.js'
import { OrderLine, Order, Offer, Price } from '@datafoodconsortium/connector';
describe('dfc orders', () => {

    describe("Request", () => {
        //Open questions to Garethe / DFC
        //What is the order date in our context? Can it be updated? Do we need to store it? Does it get assigned by the hub or the producer?

        //Awaiting answer:
        //Where does the product id go in the order line? Is it in the offer ID? Or does the offer have to link to a supplied product?
        //You cant create dfc objects without assigning the semantic ID, but the request payloads wont have an ID already

        let connector, orderRequest, orderLine1Request, orderLine2Request;

        beforeEach(async () => {
            connector = await loadConnectorWithResources();

            orderLine1Request = new OrderLine({
                connector,
                semanticId: 'http://test.host/api/dfc/Enterprises/10000/Orders/10001/orderlines/10001-01',
                quantity: 5,
                offer: new Offer({ connector, semanticId: "http://myplatform.com/Product1" })
            });

            orderLine2Request = new OrderLine({
                connector,
                semanticId: 'http://test.host/api/dfc/Enterprises/10000/Orders/10001/orderlines/10001-02',
                quantity: 10,
                offer: new Offer({ connector, semanticId: "http://myplatform.com/Product2" })
            });

            orderRequest = new Order({
                connector,
                semanticId: 'http://test.host/api/dfc/Enterprises/10000/Orders/10001',
                lines: [orderLine1Request, orderLine2Request]
            });
        })

        it('Can extract dfc order and lines from request payload', async () => {
            const orderPayload = await connector.export([orderRequest, orderLine1Request, orderLine2Request])

            const deserialisedOrder = await extractOrderAndLines(orderPayload)

            expect(deserialisedOrder.getSemanticType()).toBe('dfc-b:Order')

            const lines = await deserialisedOrder.getLines();
            expect(lines).toHaveLength(2);
            expect(lines[0].getQuantity()).toBe(5);
        });

        it('will fail if order is missing', async () => {
            const orderPayload = await connector.export([orderLine1Request, orderLine2Request])

            expect.assertions(1);
            return extractOrderAndLines(orderPayload).catch(error => {
                expect(error.message).toBe('Order missing')
            })
        });

        it('will fail if lines are missing', async () => {
            const orderPayload = await connector.export([orderRequest, orderLine1Request])

            expect.assertions(1);
            return extractOrderAndLines(orderPayload).catch(error => {
                expect(error.message).toBe('Graph is missing OrderLine')
            })
        });
    });

    describe("From Shopify", () => {
        it('Can convert a shopify draft order to dfc', async () => {
            const shopifyOrder = {
                "id": "gid://shopify/DraftOrder/1166522712371",
                "lineItems": {
                    "edges": [
                        {
                            "node": {
                                "id": "gid://shopify/DraftOrderLineItem/58380080054579",
                                "quantity": 5,
                                "variant": {
                                    "id": "gid://shopify/ProductVariant/44519466336563",
                                    "title": "Small case, 6 x 100ml",
                                    "price": "54.00"
                                }
                            }
                        },
                        {
                            "node": {
                                "id": "gid://shopify/DraftOrderLineItem/67543322145",
                                "quantity": 5,
                                "variant": {
                                    "id": "gid://shopify/ProductVariant/44519466336563",
                                    "title": "Small case, 6 x 100ml",
                                    "price": "54.00"
                                }
                            }
                        }
                    ]
                }
            };

            const idMappings = {"gid://shopify/DraftOrderLineItem/58380080054579": 1, "gid://shopify/DraftOrderLineItem/67543322145": 2};

            const dfcOutput = await createDfcOrderFromShopify(shopifyOrder, idMappings)
            expect(dfcOutput).toBe(`{\"@context\":\"https://www.datafoodconsortium.org\",\"@graph\":[{\"@id\":\"1\",\"@type\":\"dfc-b:OrderLine\",\"dfc-b:concerns\":{\"@id\":\"gid://shopify/ProductVariant/44519466336563\"},\"dfc-b:hasPrice\":{\"@id\":\"_:b1\"},\"dfc-b:quantity\":\"5\"},{\"@id\":\"2\",\"@type\":\"dfc-b:OrderLine\",\"dfc-b:concerns\":{\"@id\":\"gid://shopify/ProductVariant/44519466336563\"},\"dfc-b:hasPrice\":{\"@id\":\"_:b2\"},\"dfc-b:quantity\":\"5\"},{\"@id\":\"_:b1\",\"@type\":\"dfc-b:Price\",\"dfc-b:hasUnit\":\"dfc-m:Euro\",\"dfc-b:value\":\"54.00\"},{\"@id\":\"_:b2\",\"@type\":\"dfc-b:Price\",\"dfc-b:hasUnit\":\"dfc-m:Euro\",\"dfc-b:value\":\"54.00\"},{\"@id\":\"gid://shopify/DraftOrder/1166522712371\",\"@type\":\"dfc-b:Order\",\"dfc-b:hasPart\":[{\"@id\":\"1\"},{\"@id\":\"2\"}]}]}`);
        })
    });

});