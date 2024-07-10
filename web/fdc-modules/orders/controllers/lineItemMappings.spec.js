import { persistLineIdMappings } from './lineItemMappings'
import { pool } from '../../../database/connect'
describe('lineItemMappings', () => {

    beforeAll(async () => {
        await pool.query(`truncate table line_items restart identity`);
    });

    it('will store id mappings from shopify', async () => {
        const draftOrder = {
            id: 12345,
            lineItems: {
                edges: [
                    {
                        node: {
                            id: 665,
                            quantity: 5,
                            variant: {
                                id: 99,
                                title: '500g x 12',
                                price: 55.603
                            }
                        }
                    }
                ]
            }
        };

        expect(await persistLineIdMappings(draftOrder)).toStrictEqual({"665": 1});
    });

    it('Can update the line id mappings so that the external id remains stable for a variant', async () => {
        const updatedDraftOrder = {
            id: 12345,
            lineItems: {
                edges: [
                    {
                        node: {
                            id: 1234,
                            quantity: 5,
                            variant: {
                                id: 99,
                                title: '500g x 12',
                                price: 55.603
                            }
                        }
                    },
                    {
                        node: {
                            id: 5678,
                            quantity: 5,
                            variant: {
                                id: 100,
                                title: '99g',
                                price: 25
                            }
                        }
                    }
                ]
            }
        };

        expect(await persistLineIdMappings(updatedDraftOrder)).toStrictEqual({"1234": 1, "5678": 3});
    });
})