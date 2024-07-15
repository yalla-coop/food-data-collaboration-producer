import { Offer, Order, OrderLine } from '@datafoodconsortium/connector';
import loadConnectorWithResources from '../../../connector/index.js';
import { createDfcOrderFromShopify, createDfcOrderLineFromShopify, createDfcOrderLinesFromShopify, extractOrderAndLines, extractOrderLine } from './dfc-order.js';
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

        it('Order extraction will fail if order is missing', async () => {
            const orderPayload = await connector.export([orderLine1Request, orderLine2Request])

            expect.assertions(1);
            return extractOrderAndLines(orderPayload).catch(error => {
                expect(error.message).toBe('Order missing')
            })
        });

        it('Order extraction will fail if lines are missing', async () => {
            const orderPayload = await connector.export([orderRequest, orderLine1Request])

            expect.assertions(1);
            return extractOrderAndLines(orderPayload).catch(error => {
                expect(error.message).toBe('Graph is missing OrderLine')
            })
        });

        it('Can extract dfc order line from request payload', async () => {
            const orderLinePayload = await connector.export([orderLine1Request])
            const deserialisedOrderLine = await extractOrderLine(orderLinePayload)
            expect(deserialisedOrderLine.getSemanticType()).toBe('dfc-b:OrderLine')
        });

        it('Single OrderLine extraction will fail if OrderLine is missing', async () => {
            const orderPayload = await connector.export([new Offer({ connector, semanticId: "http://myplatform.com/Product2" })])

            expect.assertions(1);
            return extractOrderLine(orderPayload).catch(error => {
                expect(error.message).toBe('Single OrderLine not present in graph')
            })
        });

        it('Single OrderLine extraction will fail if multiple OrderLines', async () => {
            const orderPayload = await connector.export([orderLine1Request, orderLine2Request])

            expect.assertions(1);
            return extractOrderLine(orderPayload).catch(error => {
                expect(error.message).toBe('Single OrderLine not present in graph')
            })
        });
    });

    describe("From Shopify", () => {

        const shopifyOrder = {
            "id": "gid://shopify/DraftOrder/1166522712371",
            "lineItems": {
                "edges": [
                    {
                        "node": {
                            "id": "gid://shopify/DraftOrderLineItem/58380080054579",
                            "quantity": 5,
                            "originalUnitPriceSet": {
                                "shopMoney": {
                                    "amount": "104.56",
                                    "currencyCode": "GBP"
                                }
                            },
                            "variant": {
                                "id": "gid://shopify/ProductVariant/44519466336563",
                                "title": "Small case, 6 x 100ml",
                            }
                        }
                    },
                    {
                        "node": {
                            "id": "gid://shopify/DraftOrderLineItem/67543322145",
                            "quantity": 5,
                            "originalUnitPriceSet": {
                                "shopMoney": {
                                    "amount": "200.00",
                                    "currencyCode": "EUR"
                                }
                            },
                            "variant": {
                                "id": "gid://shopify/ProductVariant/44519466336566",
                                "title": "Large case, 12 x 100ml",
                            }
                        }
                    }
                ]
            }
        };

        const idMappings = {"gid://shopify/DraftOrderLineItem/58380080054579": 1, "gid://shopify/DraftOrderLineItem/67543322145": 2};

        it('Can convert a shopify draft order to dfc order with lines', async () => {
            const dfcOutput = await createDfcOrderFromShopify(shopifyOrder, idMappings, 'test-shop')
            expect(dfcOutput).toBe(`{\"@context\":\"https://www.datafoodconsortium.org\",\"@graph\":[{\"@id\":\"/api/dfc/Enterprises/test-shop/offers/#1\",\"@type\":\"dfc-b:Offer\",\"dfc-b:offeredItem\":{\"@id\":\"http://localhost:8081/api/dfc/Enterprises/test-shop/SuppliedProducts/44519466336563\"}},{\"@id\":\"/api/dfc/Enterprises/test-shop/offers/#2\",\"@type\":\"dfc-b:Offer\",\"dfc-b:offeredItem\":{\"@id\":\"http://localhost:8081/api/dfc/Enterprises/test-shop/SuppliedProducts/44519466336566\"}},{\"@id\":\"_:b1\",\"@type\":\"dfc-b:Price\",\"dfc-b:hasUnit\":\"dfc-m:PoundSterling\",\"dfc-b:value\":\"104.56\"},{\"@id\":\"_:b2\",\"@type\":\"dfc-b:Price\",\"dfc-b:hasUnit\":\"dfc-m:Euro\",\"dfc-b:value\":\"200.00\"},{\"@id\":\"http://localhost:8081/api/dfc/Enterprises/test-shop/Orders/1166522712371\",\"@type\":\"dfc-b:Order\",\"dfc-b:hasPart\":[{\"@id\":\"http://localhost:8081/api/dfc/Enterprises/test-shop/Orders/1166522712371/orderLines/1\"},{\"@id\":\"http://localhost:8081/api/dfc/Enterprises/test-shop/Orders/1166522712371/orderLines/2\"}]},{\"@id\":\"http://localhost:8081/api/dfc/Enterprises/test-shop/Orders/1166522712371/orderLines/1\",\"@type\":\"dfc-b:OrderLine\",\"dfc-b:concerns\":{\"@id\":\"/api/dfc/Enterprises/test-shop/offers/#1\"},\"dfc-b:hasPrice\":{\"@id\":\"_:b1\"},\"dfc-b:quantity\":\"5\"},{\"@id\":\"http://localhost:8081/api/dfc/Enterprises/test-shop/Orders/1166522712371/orderLines/2\",\"@type\":\"dfc-b:OrderLine\",\"dfc-b:concerns\":{\"@id\":\"/api/dfc/Enterprises/test-shop/offers/#2\"},\"dfc-b:hasPrice\":{\"@id\":\"_:b2\"},\"dfc-b:quantity\":\"5\"}]}`);
        });

        it('Can convert a shopify draft order to just lines', async () => {
            const dfcOutput = await createDfcOrderLinesFromShopify(shopifyOrder, idMappings,  'test-shop', 12345)
            expect(dfcOutput).toBe(`{\"@context\":\"https://www.datafoodconsortium.org\",\"@graph\":[{\"@id\":\"/api/dfc/Enterprises/test-shop/offers/#1\",\"@type\":\"dfc-b:Offer\",\"dfc-b:offeredItem\":{\"@id\":\"http://localhost:8081/api/dfc/Enterprises/test-shop/SuppliedProducts/44519466336563\"}},{\"@id\":\"/api/dfc/Enterprises/test-shop/offers/#2\",\"@type\":\"dfc-b:Offer\",\"dfc-b:offeredItem\":{\"@id\":\"http://localhost:8081/api/dfc/Enterprises/test-shop/SuppliedProducts/44519466336566\"}},{\"@id\":\"_:b3\",\"@type\":\"dfc-b:Price\",\"dfc-b:hasUnit\":\"dfc-m:PoundSterling\",\"dfc-b:value\":\"104.56\"},{\"@id\":\"_:b4\",\"@type\":\"dfc-b:Price\",\"dfc-b:hasUnit\":\"dfc-m:Euro\",\"dfc-b:value\":\"200.00\"},{\"@id\":\"http://localhost:8081/api/dfc/Enterprises/test-shop/Orders/12345/orderLines/1\",\"@type\":\"dfc-b:OrderLine\",\"dfc-b:concerns\":{\"@id\":\"/api/dfc/Enterprises/test-shop/offers/#1\"},\"dfc-b:hasPrice\":{\"@id\":\"_:b3\"},\"dfc-b:quantity\":\"5\"},{\"@id\":\"http://localhost:8081/api/dfc/Enterprises/test-shop/Orders/12345/orderLines/2\",\"@type\":\"dfc-b:OrderLine\",\"dfc-b:concerns\":{\"@id\":\"/api/dfc/Enterprises/test-shop/offers/#2\"},\"dfc-b:hasPrice\":{\"@id\":\"_:b4\"},\"dfc-b:quantity\":\"5\"}]}`);
        });

        it('Can convert a shopify draft order to a single lines', async () => {
            const dfcOutput = await createDfcOrderLineFromShopify(shopifyOrder, 2, idMappings, 'test-shop', 12345)
            expect(dfcOutput).toBe(`{\"@context\":\"https://www.datafoodconsortium.org\",\"@graph\":[{\"@id\":\"/api/dfc/Enterprises/test-shop/offers/#2\",\"@type\":\"dfc-b:Offer\",\"dfc-b:offeredItem\":{\"@id\":\"http://localhost:8081/api/dfc/Enterprises/test-shop/SuppliedProducts/44519466336566\"}},{\"@id\":\"_:b5\",\"@type\":\"dfc-b:Price\",\"dfc-b:hasUnit\":\"dfc-m:Euro\",\"dfc-b:value\":\"200.00\"},{\"@id\":\"http://localhost:8081/api/dfc/Enterprises/test-shop/Orders/12345/orderLines/2\",\"@type\":\"dfc-b:OrderLine\",\"dfc-b:concerns\":{\"@id\":\"/api/dfc/Enterprises/test-shop/offers/#2\"},\"dfc-b:hasPrice\":{\"@id\":\"_:b5\"},\"dfc-b:quantity\":\"5\"}]}`);
        });

        it('Single line that isnt found returns null', async () => {
            const dfcOutput = await createDfcOrderLineFromShopify(shopifyOrder, 5, idMappings)
            expect(dfcOutput).toBe(null);
        });
    });

});