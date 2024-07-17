import {
  createSuppliedProducts,
  createVariantSuppliedProduct,
  exportSuppliedProducts,
  semanticIdPrefix
} from './productUtils';

import {
  createSuppliedProductsInput,
  createVariantSuppliedProductInputs,
  exportSuppliedProductsJSONLD,
  suppliedProductsWithFdcVariants
} from './mocks.js';

describe('createVariantSuppliedProduct', () => {
  it('should create a variant supplied product', async () => {
    const variant = createVariantSuppliedProductInputs[0].variantInput;
    const images = createVariantSuppliedProductInputs[1].imagesInput;

    const result = await createVariantSuppliedProduct(
      createSuppliedProductsInput[0],
      variant,
      images
    );

    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(3);
    expect(result[0].getSemanticId()).toBe(
      `${semanticIdPrefix}SuppliedProducts/43305180201112`
    );
    expect(result[0].getName()).toBe('Camelina Seed - Retail pack, 300g');
    expect(result[0].getImages()).toEqual(
      createSuppliedProductsInput[0].images.map(({ src }) => src)
    );

    expect(result[1].getSemanticId()).toBe(
      `${semanticIdPrefix}SuppliedProducts/43305180201112/Offer`
    );
    expect(result[2].getSemanticId()).toBe(
      `${semanticIdPrefix}SuppliedProducts/43305180201112/CatalogItem`
    );

    const [quantity, catalogItems] = await Promise.all([
      result[0].getQuantity(),
      result[0].getCatalogItems()
    ]);

    expect(await quantity.getQuantityValue()).toBe(variant.weight);
    expect(await quantity.getQuantityUnit()).toBeDefined();

    const catalogItem = catalogItems[0];
    expect(catalogItem.getSku()).toBe(variant.sku);
    expect(catalogItem.getStockLimitation()).toBe(variant.inventory_quantity);

    const offers = await catalogItem.getOfferers();
    const offer = offers[0];
    const price = await offer.getPrice();
    expect(price.getQuantityValue()).toBe(Number(variant.price));
    expect(price.getVatRate()).toBe(variant.taxable ? 1.0 : 0.0);
  });

  it('catalogue will have stock limitation -1 when inventory policy is to continue selling, regardless of inventory quantity', async () => {
    const variantWithContinueSelling = {
      ...createVariantSuppliedProductInputs[0].variantInput,
      inventory_quantity: 1,
      inventory_policy: 'continue'
    };

    const result = await createVariantSuppliedProduct(
      createSuppliedProductsInput[0],
      variantWithContinueSelling,
      createVariantSuppliedProductInputs[1].imagesInput
    );
    const catalogItems = await result[0].getCatalogItems();

    expect(catalogItems).toHaveLength(1);
    expect(catalogItems[0].getStockLimitation()).toBe(-1);
  });
});

describe('createSuppliedProducts', () => {
  it('should create suppliedProducts from shopify Products and their Variants', async () => {
    const semanticIdProductOne = `${semanticIdPrefix}SuppliedProducts/${suppliedProductsWithFdcVariants[0].variants[0].id}`;
    const semanticIdProductTwo = `${semanticIdPrefix}SuppliedProducts/${suppliedProductsWithFdcVariants[0].variants[1].id}`;

    const result = await createSuppliedProducts(
      suppliedProductsWithFdcVariants
    );

    expect(result).toBeInstanceOf(Array);
    expect(result[0].getSemanticId()).toBe(semanticIdProductOne);
    expect(result[0].getName()).toBe(
      'Baked British Beans - Retail bottle, 40ml'
    );
    expect(result[0].getDescription()).toBe(
      suppliedProductsWithFdcVariants[0].body_html
    );

    expect(result[0].getImages()).toEqual([
      suppliedProductsWithFdcVariants[0].images[0].src
    ]);

    expect(result[1].getSemanticId()).toBe(semanticIdProductTwo);

    expect(result[5].getSemanticId()).toBe(semanticIdProductOne + '/Offer');
    expect(result[6].getSemanticId()).toBe(
      semanticIdProductOne + '/CatalogItem'
    );
    expect(result[7].getSemanticId()).toBe(semanticIdProductTwo + '/Offer');
    expect(result[8].getSemanticId()).toBe(
      semanticIdProductTwo + '/CatalogItem'
    );

    expect(result[2].getSemanticId()).toBe(
      semanticIdProductOne + '/AsPlannedConsumptionFlow'
    );
    expect(result[3].getSemanticId()).toBe(
      semanticIdProductOne + '/AsPlannedProductionFlow'
    );
    expect(result[4].getSemanticId()).toBe(
      semanticIdProductOne + '/AsPlannedTransformation'
    );
  });
});

describe('exportSuppliedProducts', () => {
  it('should export the created suppliedProducts, catalogItems, Offers etc. as JSON-LD', async () => {
    const result = await exportSuppliedProducts(
      suppliedProductsWithFdcVariants
    );
    expect(result).toEqual(exportSuppliedProductsJSONLD);
  });
});
