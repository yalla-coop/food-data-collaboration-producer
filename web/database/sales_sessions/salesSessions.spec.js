import { createSalesSession, loadSalesSession } from "./salesSessions";
import { pool } from '../connect';

describe('sales sessions', () => {

    beforeEach(async () => {
        await pool.query(`truncate table sales_sessions restart identity`);
    });

    afterAll(async () => {
        await pool.query(`truncate table sales_sessions restart identity`);
    });

    it('Can create and recall a sales session', async () => {

        await createSalesSession('123456', '2024-03-14T01:00:00+01:00');

        const salesSession = await loadSalesSession('123456');

        expect(salesSession).toStrictEqual({
            shopifyOrderId: '123456',
            reservationDate: '2024-03-14T01:00:00+01:00'
        });
    });

})