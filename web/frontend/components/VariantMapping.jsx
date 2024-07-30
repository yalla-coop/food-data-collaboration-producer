/* eslint-disable no-nested-ternary */
/* eslint-disable function-paren-newline */
import {
  IconButton,
  Button,
  MenuItem,
  Stack,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import { useState } from 'react';
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
  saveVariantMapping,
  variant,
  loadingInProgress,
  toggleVariantEnableState
}) {
  const existingRetailVariant =
    (variant &&
      product?.variants?.find(
        (v) =>
          convertShopifyGraphQLIdToNumber(v.id) ===
          Number(variant.retailVariantId)
      )) ||
    null;

  const existingWholesaleVariant =
    (variant &&
      product?.variants?.find(
        (v) =>
          convertShopifyGraphQLIdToNumber(v.id) ===
          Number(variant.wholesaleVariantId)
      )) ||
    null;

  const existingNoOfItemsPerPackage = variant?.noOfItemsPerPackage || '';

  const [retailVariant, setSelectedRetailVariant] = useState(
    existingRetailVariant
  );
  const [wholesaleVariant, setSelectedWholesaleVariant] = useState(
    existingWholesaleVariant
  );
  const [noOfItemsPerPackage, setNoOfItemPerPackage] = useState(
    existingNoOfItemsPerPackage
  );

  const invalid = !retailVariant || !wholesaleVariant || !noOfItemsPerPackage;

  const changed =
    retailVariant !== existingRetailVariant ||
    wholesaleVariant !== existingWholesaleVariant ||
    noOfItemsPerPackage != existingNoOfItemsPerPackage;

  return (
    <Stack
      spacing="16px"
      border="2px solid #E0E0E0"
      borderRadius="12px"
      padding="12px"
    >
      <Stack direction="row" spacing="20px" width="100%">
        <Stack flexGrow={1} spacing="10px">
          <Typography style={{height:"42px", 'align-items': 'center', display:'flex'}}>Retail variant</Typography>
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
            disabled={loadingInProgress || existingRetailVariant}
            value={retailVariant || ''}
            onChange={(_e) => {
              setSelectedRetailVariant(_e.target.value);
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
          <Stack flexGrow={1} direction="row" justifyContent="space-between">
            <Typography style={{height:"42px", 'align-items': 'center', display:'flex'}} width={"80%"}>Wholesale variant</Typography>
            {existingRetailVariant && (
              <FormControlLabel
              style={{ pointerEvents: "none" }}
              control={
                <Checkbox
                  style={{
                    width: '50px',
                    pointerEvents: 'auto'
                  }}
                  checked={variant.enabled}
                  disabled={loadingInProgress}
                  onClick={(event) => {
                    toggleVariantEnableState(variant.id);
                    event.stopPropagation();
                  }}
                />
              }
              label={'Enable for FDC'}
              labelPlacement="start"
            />
            )}
          </Stack>
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
            disabled={loadingInProgress || existingWholesaleVariant}
            value={wholesaleVariant || ''}
            onChange={(event) =>
              setSelectedWholesaleVariant(event.target.value)
            }
          >
            {product.variants.map((variant, idx) => (
              <MenuItem key={variant.id} value={variant}>
                <VariantCard variant={variant} index={idx} />
              </MenuItem>
            ))}
          </TextField>
        </Stack>

      </Stack>

      <Stack spacing="10px">
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
        {!existingNoOfItemsPerPackage && (
          <Typography variant="body1" color="error">
            Please make sure to carefully select the correct number of items as
            this cannot be changed later
          </Typography>
        )}
        <TextField
          type="number"
          label="No. of items per Case/Box/Package"
          inputProps={{ inputMode: 'numeric', min: 0, pattern: '[0-9]*' }}
          value={noOfItemsPerPackage}
          disabled={loadingInProgress || existingNoOfItemsPerPackage}
          onChange={(e) => setNoOfItemPerPackage(e.target.value)}
        />
      </Stack>
      <Stack spacing="10px">
        <Button
          variant="contained"
          type="button"
          disabled={!variant || loadingInProgress}
          onClick={() => saveVariantMapping(null)}
        >
          Remove variant
        </Button>

        {!variant && (
          <Button
            variant="contained"
            type="button"
            disabled={invalid || loadingInProgress || !changed}
            onClick={() =>
              saveVariantMapping({
                retailVariantId: retailVariant?.id,
                wholesaleVariantId: wholesaleVariant?.id,
                noOfItemsPerPackage
              })
            }
          >
            Save product variant updates
          </Button>
        )}
      </Stack>
    </Stack>
  );
}

export { VariantMappingComponent };
