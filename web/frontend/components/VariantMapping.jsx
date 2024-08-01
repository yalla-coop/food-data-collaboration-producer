/* eslint-disable no-nested-ternary */
/* eslint-disable function-paren-newline */
import {
  Box,
  IconButton,
  Button,
  MenuItem,
  Stack,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  CircularProgress
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

const VariantMappingDetails = ({
  existingNoOfItemsPerPackage,
  noOfItemsPerPackage,
  loadingInProgress,
  setNoOfItemPerPackage
}) => (
  <Stack spacing="20px" alignItems="center">
    <Box
      style={{
        padding: '10px 20px',
        margin: '20px 0',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Stack direction="row" spacing="6px" alignItems="center">
        <Typography variant="h5" style={{ color: '#333' }}>
          Mapped Variant Ratio
        </Typography>

        <CustomTooltip
          title={
            <Typography variant="body1">
              A number that indicates the multiplier to apply before ordering
              another of the mapped variant (for example if a box/case has 6
              bottles and you're selling individual bottles, the number would be
              6)
            </Typography>
          }
        >
          <IconButton>
            <InfoIcon />
          </IconButton>
        </CustomTooltip>
      </Stack>
    </Box>
    {!existingNoOfItemsPerPackage && (
      <Typography
        variant="body1"
        color="error"
        style={{ margin: '10px 0', textAlign: 'center' }}
      >
        Please make sure to carefully select the correct number of items as this
        cannot be changed later
      </Typography>
    )}
    <TextField
      type="number"
      label="No. of items per Case/Box/Package"
      inputProps={{ inputMode: 'numeric', min: 0, pattern: '[0-9]*' }}
      value={noOfItemsPerPackage}
      disabled={loadingInProgress || existingNoOfItemsPerPackage}
      onChange={(e) => setNoOfItemPerPackage(e.target.value)}
      style={{
        margin: '10px 0',
        backgroundColor: '#fff',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '100%'
      }}
    />
  </Stack>
);

function VariantMappingComponent({
  product,
  variant,
  loadingInProgress,
  mutateMapping
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

  const [isBusy, setBusy] = useState(false);

  const invalid = !retailVariant || !wholesaleVariant || !noOfItemsPerPackage;

  const changed =
    retailVariant !== existingRetailVariant ||
    wholesaleVariant !== existingWholesaleVariant ||
    noOfItemsPerPackage != existingNoOfItemsPerPackage;

  function working(fn) {
    return async function indicatesLoading() {
      try {
        setBusy(true);
        await fn();
      } finally {
        setBusy(false);
      }
    };
  }

  const toggleVariantEnableState = working(async () => {
    await mutateMapping({
      url: `/api/products/${product.id}/variant/${variant.id}/toggleFdcStatus`,
      fetchInit: {
        method: 'POST'
      },
      variantId: variant.id
    });
  });

  const saveVariantMapping = working(async () => {
    if (variant) {
      await mutateMapping({
        url: `/api/products/${product.id}/variant/${variant.id}`,
        fetchInit: {
          method: 'POST'
        },
        variantId: variant.id,
        body: JSON.stringify({
          retailVariantId: retailVariant?.id,
          wholesaleVariantId: wholesaleVariant?.id,
          noOfItemsPerPackage
        })
      });
    } else {
      await mutateMapping({
        url: `/api/products/${product.id}/variant`,
        fetchInit: {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            retailVariantId: retailVariant?.id,
            wholesaleVariantId: wholesaleVariant?.id,
            noOfItemsPerPackage
          })
        }
      });
    }
  });

  const deleteVariantMapping = working(async () => {
    return await mutateMapping({
      url: `/api/products/${product.id}/variant/${variant.id}`,
      fetchInit: {
        method: 'DELETE'
      },
      variantId: variant.id
    });
  });

  const enableLabel = variant?.enabled ? 'Current enabled for FDC - Disable:' : 'Current disabled for FDC - Enable:'
  const enableColour = variant?.enabled ? 'green' : 'red'

  return (
    <Stack
      spacing="16px"
      border="2px solid #E0E0E0"
      borderRadius="12px"
      padding="12px"
    >
      <Stack direction="row" spacing="20px" width="100%">
        <Stack flexGrow={1} spacing="10px">
          <Typography
            style={{ height: '42px', 'align-items': 'center', display: 'flex' }}
          >
            Retail variant
          </Typography>
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
            <Typography
              style={{
                height: '42px',
                'align-items': 'center',
                display: 'flex'
              }}
            >
              Wholesale variant
            </Typography>
            {existingRetailVariant && (
              <FormControlLabel
                style={{ pointerEvents: 'none' }}
                control={
                  <Checkbox
                    style={{
                      width: '50px',
                      pointerEvents: 'auto'
                    }}
                    checked={variant.enabled}
                    disabled={loadingInProgress || isBusy}
                    onClick={toggleVariantEnableState}
                  />
                }
                
                label={<Typography fontWeight={"bold"} color={enableColour}>{enableLabel}</Typography>}
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
            disabled={loadingInProgress || existingWholesaleVariant || isBusy}
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

      <VariantMappingDetails
        existingNoOfItemsPerPackage={existingNoOfItemsPerPackage}
        noOfItemsPerPackage={noOfItemsPerPackage}
        loadingInProgress={loadingInProgress}
        setNoOfItemPerPackage={setNoOfItemPerPackage}
      />

      <Stack spacing="20px" alignItems="center">
        <Button
          variant="contained"
          type="button"
          disabled={!variant || loadingInProgress || isBusy}
          onClick={() => deleteVariantMapping()}
          style={{
            padding: '10px 20px',
            margin: '10px 0',
            backgroundColor: '#ff4d4d',
            color: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease',
            opacity: !variant || loadingInProgress || isBusy ? 0.5 : 1
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#ff1a1a')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#ff4d4d')}
        >
          Remove variant
        </Button>

        {!variant && (
          <Button
            variant="contained"
            type="button"
            disabled={invalid || loadingInProgress || !changed || isBusy}
            onClick={saveVariantMapping}
            style={{
              padding: '10px 20px',
              margin: '10px 0',
              backgroundColor: '#4caf50',
              color: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s ease',
              opacity:
                invalid || loadingInProgress || !changed || isBusy ? 0.5 : 1
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#45a049')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#4caf50')}
          >
            Save product variant updates
          </Button>
        )}
      </Stack>
      {loadingInProgress && <CircularProgress />}
    </Stack>
  );
}

export { VariantMappingComponent };
