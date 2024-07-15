import { pool } from '../connect';
import {createDraftOrder, completeDraftOrder, getOrders} from './orders'

describe('orders', () => {
    beforeAll(async () => {
        await pool.query(`truncate table orders restart identity`);
    });

    it('Order can be created', async () => {
        await createDraftOrder(55);
        await createDraftOrder(56);
        const result = await getOrders();
        expect(result).toStrictEqual([{draftOrderId: "55", completedOrderId: null}, {draftOrderId: "56", completedOrderId: null}])
    });

    it('Order can be completed', async () => {
        await completeDraftOrder(55, 654);
        const result = await getOrders();
        expect(result).toStrictEqual([{draftOrderId: "55", completedOrderId: "654"}, {draftOrderId: "56", completedOrderId: null}])
    })
});