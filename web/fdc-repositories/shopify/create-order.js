// TODO :  handle order status -  billing address and shipping address

import { getOfflineSessionByShopName } from './get-offline-session-by-shop-name.js';
import shopify from '../../shopify.js';
import createCustomer from './create-customer.js';
const createOrder = async ({ lineItems, shopName, orderData }) => {
  let customerId = null;

  const session = await getOfflineSessionByShopName(shopName);

  const {
    keycloakLesCommunsID,
    orderStatus,
    customerName,
    shippingAddress,
    phoneNumber,
    emailAddress,
    billingAddress
  } = orderData;

  const exitCustomers = await shopify.api.rest.Customer.search({
    session: session,
    query: `email:${emailAddress} OR phone:${phoneNumber}`
  });

  if (exitCustomers?.customers?.length === 0) {
    const customer = await createCustomer({
      session,
      customerName,
      emailAddress,
      phoneNumber
    });

    customerId = customer?.id;
  } else {
    customerId = exitCustomers?.customers?.[0]?.id;
  }

  const order = new shopify.api.rest.Order({
    session: session
  });

  order.line_items = lineItems;
  order.inventory_behaviour = 'decrement_obeying_policy';
  order.tags = 'FDC order';
  order.customer = {
    id: customerId
  };

  await order.saveAndUpdate();

  return {
    ...order,
    session: null
  };
};

export default createOrder;
