import {
  createSuppliedProducts,
  createVariantSuppliedProduct,
  exportSuppliedProducts
} from './productUtils';
import {
  CatalogItem,
  Offer,
  Price,
  QuantitativeValue,
  SuppliedProduct
} from './index.js';
import {
  createSuppliedProductsInput,
  createVariantSuppliedProductInputs,
  exportSuppliedProductsJSONLD
} from './mocks.js';
// import loadProductTypes from './mappedProductTypes.js';


describe('createVariantSuppliedProduct', () => {
  it('should create a variant supplied product', async () => {
    const variant = createVariantSuppliedProductInputs[0].variantInput;
    const images = createVariantSuppliedProductInputs[1].imagesInput;

    const semanticBase = `${process.env.PRODUCER_SHOP_URL}product/${variant.product_id}/variant/${variant.id}/inventory/${variant.inventory_item_id}`;
    const params = `?tracked=${variant.tracked}&imageId=${variant.image_id}`;
    const fullSemanticId = semanticBase + params;

    const result = await createVariantSuppliedProduct(variant, images);

    // Assert output
    expect(result).toBeInstanceOf(Array);
    expect(result[0]).toBeInstanceOf(Offer);
    expect(result[0].getSemanticId()).toBe(semanticBase + '/offer');
    expect(result[1]).toBeInstanceOf(CatalogItem);
    expect(result[1].getSemanticId()).toBe(semanticBase + '/catalogItem');
    expect(result[2]).toBeInstanceOf(SuppliedProduct);

    // Assert SuppliedProduct
    expect(result[2].getSemanticId()).toBe(fullSemanticId);
    expect(result[2].getName()).toBe(variant.title);
    expect(result[2].getImages()).toEqual([images[0].src]);

    const [quantity, catalogItems] = await Promise.all([
      result[2].getQuantity(),
      result[2].getCatalogItems()
    ]);

    // Assert Quantity
    expect(quantity).toBeInstanceOf(QuantitativeValue);
    expect(await quantity.getQuantityValue()).toBe(variant.weight);
    expect(await quantity.getQuantityUnit()).toBeDefined();

    // Assert CatalogItem
    const catalogItem = catalogItems[0];
    expect(catalogItem).toBeInstanceOf(CatalogItem);
    expect(catalogItem.getSku()).toBe(variant.sku);
    expect(catalogItem.getStockLimitation()).toBe(variant.inventory_quantity);

    // Assert Offer + Price
    const offers = await catalogItem.getOfferers();
    const offer = offers[0];
    expect(offer).toBeInstanceOf(Offer);
    const price = await offer.getPrice();
    expect(price).toBeInstanceOf(Price);
    expect(price.getValue()).toBe(Number(variant.price));
    expect(price.getUnit()).toBeDefined();
    expect(price.getVatRate()).toBe(variant.taxable ? 1.0 : 0.0);
  });

  it('catalogue will have stock limitation -1 when inventory policy is to continue selling, regardless of inventory quantity', async () => {
    const variantWithContinueSelling = {
      ...createVariantSuppliedProductInputs[0].variantInput,
      inventory_quantity: 1,
      inventory_policy: 'continue',
    }

    const result = await createVariantSuppliedProduct(variantWithContinueSelling, createVariantSuppliedProductInputs[1].imagesInput);
    const catalogItems = await result[2].getCatalogItems()

    expect(catalogItems).toHaveLength(1);
    expect(catalogItems[0].getStockLimitation()).toBe(-1);
  });
});

describe('createSuppliedProducts', () => {
  it('should create suppliedProducts from shopify Products and their Variants', async () => {
    const shopifyProductAndVariants = createSuppliedProductsInput;
    const product = shopifyProductAndVariants[0];
    const firstVariant = shopifyProductAndVariants[0].variants[0];
    const semanticBase = `${process.env.PRODUCER_SHOP_URL}product/${product.id}`;
    const params = `?handle=${product.handle}&imageId=${product.image.id}`;
    const fullSemanticId = semanticBase + params;

    const result = await createSuppliedProducts(shopifyProductAndVariants);

    expect(result).toBeInstanceOf(Array);
    expect(result[0]).toBeInstanceOf(SuppliedProduct);
    expect(result[0].getSemanticId()).toBe(fullSemanticId);
    expect(result[0].getName()).toBe(product.title);
    expect(result[0].getDescription()).toBe(product.body_html);
    expect(result[0].getImages()).toEqual([product.image.src]);

    const semanticIdVariant = `${process.env.PRODUCER_SHOP_URL}product/${product.id}/variant/${firstVariant.id}/inventory/${firstVariant.inventory_item_id}`;
    expect(result[1]).toBeInstanceOf(Offer);
    expect(result[1].getSemanticId()).toBe(semanticIdVariant + '/offer');
    expect(result[2]).toBeInstanceOf(CatalogItem);
    expect(result[2].getSemanticId()).toBe(semanticIdVariant + '/catalogItem');
    expect(result[3]).toBeInstanceOf(SuppliedProduct);
    expect(result[3].getSemanticId()).toBe(
      semanticIdVariant + `?imageId=${firstVariant.image_id}`
    );
  });
});

describe('exportSuppliedProducts', () => {
  it('should export the created suppliedProducts, catalogItems, Offers etc. as JSON-LD', async () => {
    const shopifyProductAndVariants = createSuppliedProductsInput;

    const result = await exportSuppliedProducts(shopifyProductAndVariants);

    expect(result).toEqual(exportSuppliedProductsJSONLD);
  });
});
