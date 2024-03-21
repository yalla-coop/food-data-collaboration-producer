/* eslint-disable no-nested-ternary */
/* eslint-disable function-paren-newline */
import {
  IconButton,
  Button,
  MenuItem,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { useState, useEffect } from 'react';
import { CustomTooltip } from './CustomTooltip';
import { InfoIcon } from './InfoIcon';
import { VariantCard } from './VariantCard';

const convertShopifyGraphQLIdToNumber = (id) => {
  if (!id) return null;
  if (typeof id === 'number') return id;
  return parseInt(id.split('/').pop(), 10);
};

function VariantMappingComponent({
  product,
  updateVariantMapping,
  variant,
}) {
  const existingHubVariantId =
  (variant && product?.variants?.find(
      (v) =>
        convertShopifyGraphQLIdToNumber(v.id) ===
        Number(variant.hubVariantId)
    )) || null;

  const existingProducerVariantId =
    (variant && product?.variants?.find(
      (v) =>
        convertShopifyGraphQLIdToNumber(v.id) ===
        Number(variant.producerVariantId)
    )) || null;

  const existingNoOfItemsPerPackage = variant?.noOfItemsPerPackage || '';

  const [hubVariantId, setSelectedHubVariant] = useState(existingHubVariantId);
  const [producerVariantId, setSelectedProducerVariant] = useState(existingProducerVariantId);
  const [noOfItemsPerPackage, setNoOfItemPerPackage] = useState(
    existingNoOfItemsPerPackage
  );

  useEffect(() => {
    updateVariantMapping({hubVariantId, producerVariantId, noOfItemsPerPackage});
  }, [hubVariantId, producerVariantId, noOfItemsPerPackage])

  return (
    <Stack
      spacing="16px"
      border="2px solid #E0E0E0"
      borderRadius="12px"
      padding="12px"
    >
      <Stack
        direction="row"
        spacing="20px"
        width="100%"
      >
        <Stack flexGrow={1} spacing="10px">
          <Typography>Variant to sell on hub</Typography>
          <TextField
            fullWidth
            label="Select"
            helperText="Please select a variant to sell on hub"
            select
            sx={{
              '& .MuiInputBase-root': {
                listStyle: 'none'
              }
            }}
            value={hubVariantId || ''}
            onChange={(_e) => {
              setSelectedHubVariant(_e.target.value);
            }}
          >
            {product.variants.map((variant, idx) => (
              <MenuItem key={variant.id} value={variant}>
                <VariantCard variant={variant} index={idx} />
              </MenuItem>
            ))}
          </TextField>
        </Stack>

        <Stack flexGrow={1} spacing="10px">
          <Typography>Variant to order from you</Typography>
          <TextField
            fullWidth
            label="Select"
            helperText="Please select a variant for hub to order from you"
            select
            sx={{
              '& .MuiInputBase-root': {
                listStyle: 'none'
              }
            }}
            value={producerVariantId || ''}
            onChange={(event) => setSelectedProducerVariant(event.target.value)}
          >
            {product.variants.map((variant, idx) => (
              <MenuItem key={variant.id} value={variant}>
                <VariantCard variant={variant} index={idx} />
              </MenuItem>
            ))}
          </TextField>
        </Stack>
      </Stack>

      <Stack
        spacing="10px"
      >
        <Stack direction="row" spacing="6px" alignItems="center">
          <Typography variant="h5">Mapped Variant Ratio</Typography>
          <CustomTooltip
            title={
              <Typography variant="body1">
                A number that indicates the multiplier to apply before ordering
                another of the mapped variant (for example if a box/case has 6
                bottles and you're selling individual bottles, the number would
                be 6)
              </Typography>
            }
          >
            <IconButton>
              <InfoIcon />
            </IconButton>
          </CustomTooltip>
        </Stack>
        <TextField
          type="number"
          label="No. of items per Case/Box/Package"
          inputProps={{ inputMode: 'numeric', min: 0, pattern: '[0-9]*' }}
          value={noOfItemsPerPackage}
          onChange={(e) => setNoOfItemPerPackage(e.target.value)}
        />
      </Stack>
      <Stack
        spacing="10px"
      >
        <Button
                  variant="contained"
                  type="button"
                  onClick={() => updateVariantMapping(null)}
                >
                  Remove variant
                </Button>
      </Stack>
    </Stack>
  );
}

export { VariantMappingComponent };
