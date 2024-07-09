import {createLineItems, getLineItems} from './lineItems'
import { pool } from '../connect';

describe('lineItems', () => {
    beforeEach(async () => {
        await pool.query(`truncate table line_items restart identity`);
    });

    it('Can be rembered and recalled', async () => {
        await createLineItems(5, [{id: 1234, variantId: 55}, {id: 56678, variantId: 67}]);
        const result = await getLineItems(5);
        expect(result).toStrictEqual([{externalId: 1, shopifyId: "1234", variantId: "55"}, {externalId: 2, shopifyId: "56678", variantId: "67"}])
    });

    it('returns empty array for no order', async () => {
        expect(await getLineItems(1234)).toStrictEqual([]);
    })
});