import shopify from '../../shopify.js';

const createCustomer = async ({
  session,
  customerName,
  emailAddress,
  phoneNumber
}) => {
  const customer = new shopify.api.rest.Customer({session: session});

  customer.first_name = customerName;
  customer.last_name = '';
  customer.email = emailAddress;
  customer.phone = phoneNumber;
  customer.verified_email = true;
  customer.tags = 'FDC customer';

  await customer.saveAndUpdate({
    update: true
  });

  return customer;
};

export default createCustomer;
