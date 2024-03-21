import { getClient, query } from '../../../database/connect.js';


const updateFdcVariantMappings = async (req, res, next) => {

  const { id: productId } = req.params;
  const variants = req.body;

  const client = await getClient();
  await client.query('BEGIN');
  try {

    await query('DELETE FROM fdc_variants where product_id = $1', [productId], client);

    variants.forEach(async variant => {
      await query(
        'INSERT INTO fdc_variants (product_id, wholesale_variant_id, retail_variant_id, no_of_items_per_package) VALUES ($1,$2,$3,$4) RETURNING id',
        [
          productId,
          variant.wholesaleVariantId,
          variant.retailVariantId,
          variant.noOfItemsPerPackage,
        ],
        client
      );
    });
    await client.query('COMMIT');

    res.status(200).send({});

  } catch (err) {
    await client.query('ROLLBACK');
    console.log('Error setting variant mappings', err);
    next(err);
  } finally {
    client.release();
  }
};

export default updateFdcVariantMappings;
