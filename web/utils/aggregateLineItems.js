export const testProductCancellation = [
  {
    title: 'test-product',
    description: 'no more items required due to cancellation',
    quantity: 1,
    price: 0,
    variant_id: 1
  }
];

export const aggregateLineItems = (orderType, lineItems) => {
  const aggregatedLineItems = lineItems.reduce((acc, lineItem) => {
    const variantId = Number(lineItem.variant_id);

    const { [variantId]: existingLineItem, ...otherLineItems } = acc;

    if (existingLineItem) {
      const updatedQuantity =
        orderType === 'completed'
          ? Number(existingLineItem.quantity) + Number(lineItem.quantity)
          : Number(existingLineItem.quantity) - Number(lineItem.quantity);

      if (updatedQuantity === 0) {
        return otherLineItems;
      }

      return {
        ...otherLineItems,
        [variantId]: { variant_id: variantId, quantity: updatedQuantity }
      };
    }

    return {
      ...otherLineItems,
      [variantId]: {
        variant_id: variantId,
        quantity: Number(lineItem.quantity)
      }
    };
  }, {});

  const updateLineItems = Object.values(aggregatedLineItems);

  return updateLineItems.length > 0 ? updateLineItems : testProductCancellation;
};
