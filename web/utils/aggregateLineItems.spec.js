import {
  aggregateLineItems,
  testProductCancellation
} from './aggregateLineItems.js';

it('should aggregate line items correctly for completed order', () => {
  const orderType = 'completed';
  const lineItems = [
    {
      variant_id: 44525624557875,
      quantity: 5
    },
    {
      variant_id: 44525624557875,
      quantity: 3
    },
    {
      variant_id: 123456789,
      quantity: 2
    }
  ];

  const expectedAggregatedLineItems = [
    {
      variant_id: 123456789,
      quantity: 2
    },
    {
      variant_id: 44525624557875,
      quantity: 8
    }
  ];

  const result = aggregateLineItems(orderType, lineItems);
  expect(result).toEqual(expectedAggregatedLineItems);
});

it('should aggregate line items correctly for cancelled order', () => {
  const orderType = 'cancelled';
  const lineItems = [
    {
      variant_id: 44525624557875,
      quantity: 5
    },
    {
      variant_id: 44525624557875,
      quantity: 3
    },
    {
      variant_id: 123456789,
      quantity: 2
    },
    {
      variant_id: 987654321,
      quantity: 4
    },
    {
      variant_id: 987654321,
      quantity: 4
    }
  ];

  const expectedAggregatedLineItems = [
    {
      variant_id: 123456789,
      quantity: 2
    },
    {
      variant_id: 44525624557875,
      quantity: 2
    }
  ];

  const result = aggregateLineItems(orderType, lineItems);

  expect(result).toEqual(expectedAggregatedLineItems);
});

it('should remove line item if quantity is 0', () => {
  const orderType = 'cancelled';
  const lineItems = [
    {
      variant_id: 44525624557875,
      quantity: 5
    },
    {
      variant_id: 44525624557875,
      quantity: 5
    }
  ];

  const result = aggregateLineItems(orderType, lineItems);

  expect(result).toEqual(testProductCancellation);
});

it('should return test product if there are no line items', () => {
  const orderType = 'cancelled';
  const lineItems = [];

  const result = aggregateLineItems(orderType, lineItems);

  expect(result).toEqual(testProductCancellation);
});
