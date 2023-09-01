import * as yup from 'yup';
import OrderUseCases from '../use-cases/index.js';
import { getOfflineAccessTokenByShopName } from '../../../fdc-repositories/shopify/get-offline-access-token-by-shop-name.js';

const orderSchema = yup
  .object({
    keycloakLesCommunsID: yup.string().required(),
    orderStatus: yup.string().required(),
    customerName: yup.string().required(),
    shippingAddress: yup.string().required(),
    phoneNumber: yup.string(),
    emailAddress: yup.string().required(),
    billingAddress: yup.string().required(),
    lineItems: yup.array(
      yup
        .object({
          quantity: yup.number().required(),
          variant_id: yup.number().required(),
          inventory_item_id: yup.number().required(),
          sku: yup.string().required()
        })
        .required()
    )
  })
  .required();

const retrieveOrder = async (req, res, next) => {
  try {
    const { order, shopName } = req.fdc;

    await orderSchema.validate(order);

    const accessToken = await getOfflineAccessTokenByShopName(shopName);
    if (!accessToken) {
      return res.status(500).json({
        success: false,
        message: `No access token found for store ${shopName}`
      });
    }

    const createdOrder = await OrderUseCases.createOrder({
      order,
      shopName,
      accessToken
    });

    return res.status(200).json({
      success: true,
      message: 'Order retrieved successfully',
      createdOrder
    });
  } catch (error) {
    console.log('error', error);
    return next(error);
  }
};

export default retrieveOrder;
