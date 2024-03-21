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
  variant = {},
}) {
  const exitingVariantA =
  (variant && product?.variants?.find(
      (v) =>
        convertShopifyGraphQLIdToNumber(v.id) ===
        Number(variant.producerVariantId)
    )) || null;

  const exitingVariantB =
    (variant && product?.variants?.find(
      (v) =>
        convertShopifyGraphQLIdToNumber(v.id) ===
        Number(variant.mappedVariantId)
    )) || null;

  const exitingNoOfItemPerCase = variant?.noOfItemsPerPackage || '';

  const [selectedVariantA, setSelectedVariantA] = useState(exitingVariantA);
  const [selectedVariantB, setSelectedVariantB] = useState(exitingVariantB);
  const [noOfItemPerCase, setNoOfItemPerCase] = useState(
    exitingNoOfItemPerCase
  );

  useEffect(() => {
    updateVariantMapping({selectedVariantA, selectedVariantB, noOfItemPerCase});
  }, [selectedVariantA, selectedVariantB, noOfItemPerCase])

  const isFormComplete = () => {
    if (
      selectedVariantA &&
      selectedVariantB &&
      noOfItemPerCase
    ) {
      return true;
    }
    return false;
  };

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
            value={selectedVariantA || ''}
            onChange={(_e) => {
              setSelectedVariantA(_e.target.value);
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
            value={selectedVariantB || ''}
            onChange={(event) => setSelectedVariantB(event.target.value)}
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
          value={noOfItemPerCase}
          onChange={(e) => setNoOfItemPerCase(e.target.value)}
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
