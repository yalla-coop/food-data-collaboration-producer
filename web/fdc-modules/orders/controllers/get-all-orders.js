import { getAllLineItems } from '../../../database/line_items/lineItems.js';
import shopify from '../../../shopify.js';
import getSession from '../../../utils/getShopifySession.js';
import { createBulkDfcOrderFromShopify } from '../dfc/dfc-order.js';
import { findOrders } from './shopify/orders.js';

const getAllOrders = async (req, res) => {
    try {
        const session = await getSession(`${req.params.EnterpriseName}.myshopify.com`)
        const client = new shopify.api.clients.Graphql({ session });

        const {before, after, first, last} = req.query;

        if ((before && after) || (before && first) || (after && last) && (before && !last) && (after && !first)){
            return res.status(400).send('Incorrect combination of paging parameters. You cannot page forward and backwards symultaneously');
        }

        const draftOrdersWithLineItemMappings = await getAllLineItems();

        const {orders, pageInfo} = await findOrders(client, {before, after, first: Number(first), last: Number(last)});

        const allDfcOrders = await createBulkDfcOrderFromShopify(orders, draftOrdersWithLineItemMappings, req.params.EnterpriseName);

        res.type('application/json');
        res.set("pageInfo", JSON.stringify(pageInfo));
        res.send(allDfcOrders);
    } catch (error) {
        console.error(error);
        res.status(500).end();
    }
}

export default getAllOrders