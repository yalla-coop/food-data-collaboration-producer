import { createSuppliedProduct } from './productUtils';
import { SuppliedProduct } from './index.js';
// import loadProductTypes from './mappedProductTypes.js';

const product = {
  id: 123,
  handle: 'test-handle',
  image: { id: 456, src: 'test-image-src', product_id: 123 },
  title: 'Test Product',
  body_html: 'Test description',
  product_type: 'Cans'
};

describe('createSuppliedProduct', () => {
  it('should create a supplied product', async () => {
    // const productTypes = await loadProductTypes();

    const semanticBase = `${process.env.PRODUCER_SHOP_URL}product/${product.id}`;
    const params = '?handle=test-handle&imageId=456';
    const fullSemanticId = semanticBase + params;

    const result = await createSuppliedProduct(product);

    // Assert the expected output
    expect(result).toBeInstanceOf(SuppliedProduct);
    expect(result.getSemanticId()).toBe(fullSemanticId);
    expect(result.getName()).toBe(product.title);
    expect(result.getDescription()).toBe(product.body_html);
    expect(result.getImages()).toEqual([product.image.src]);
    // expect(result.getProductType()).toBe(productTypes[product.product_type]);
  });
});
