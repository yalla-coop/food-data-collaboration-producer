import { toggleVariantMappingStatus } from '../../../database/variants/variants.js'
const toggleFdcStatus = async (req, res) => {
  try {
    const { variantId } = req.params;

    const updatedVariantMapping = await toggleVariantMappingStatus(variantId);

    return res.status(200).json({
      variant: updatedVariantMapping,
      success: true,
      message: 'Variant updated successfully'
    });
  } catch (error) {
    console.error('Error updating product', error);
    return res.status(500).json({
      success: false,
      message: 'Error updating product'
    });
  }
};

export default toggleFdcStatus;
