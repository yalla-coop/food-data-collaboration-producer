import { toggleVariantMappingStatus } from '../../../database/variants/variants.js'

const toggleFdcVariantStatus = async (req, res) => {
  try {
    const { variantId } = req.params;

    const updatedVariantMapping = await toggleVariantMappingStatus(variantId);

    return res.status(200).json(updatedVariantMapping);
  } catch (error) {
    console.error('Error updating product', error);
    return res.status(500).json({
      error: 'Error updating product'
    });
  }
};

export default toggleFdcVariantStatus;
