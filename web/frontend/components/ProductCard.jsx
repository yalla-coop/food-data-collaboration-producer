import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography
} from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { useAppMutation } from '../hooks';
import { ExpandMoreIcon } from './ExpandMoreIcon';
import { VariantMappingComponent } from './VariantMapping';
import { ProductsIcon } from './ProductsIcon';

export function ProductCard({ product }) {
  const queryClient = useQueryClient();
  const [isDisabled, setDisabled] = useState(false);
  const [variantsMappingData, setVariantsMappingData] = useState(product.fdcVariants.length === 0 ? [{}] : product.fdcVariants);

  function updateVariantMapping(index, update) {
    if (!update){
      setVariantsMappingData(variantsMappingData.filter((_, i) => i !== index));
    } else {
      setVariantsMappingData(variantsMappingData.map((variant, i) => i == index? update : variant))
    }
  }

  const variantsInvalid = variantsMappingData.some(({retailVariantId, wholesaleVariantId, noOfItemsPerPackage}) => (
    !retailVariantId ||  !wholesaleVariantId || !noOfItemsPerPackage
  ));

  const { mutateAsync } = useAppMutation({
    reactQueryOptions: {
      onSettled: () => {
        setDisabled(false);
      },
      onSuccess: (updateProductData) => {
        queryClient.setQueryData('/api/products', (query) => {
          const productId = updateProductData?.product?.id;

          if (!productId) {
            return query;
          }

          const productIndex = query?.products?.findIndex(
            (p) => p.id === productId
          );

          if (productIndex === -1) {
            return query;
          }

          const updatedProducts = [...query.products];
          updatedProducts[productIndex] = updateProductData.product;

          return {
            ...query,
            products: updatedProducts
          };
        });
        queryClient.invalidateQueries('/api/products');
      }
    }
  });

  const {
    mutateAsync: updateVariantMappings,
    isLoading: variantMappingsBeingUpdated
  } = useAppMutation({
    reactQueryOptions: {
      onSuccess: async () => {
        await queryClient.invalidateQueries('/api/products');
      }
    }
  });

  const persistUpdatedVariantMappings = async (variantMappings) => {
    await updateVariantMappings({
      url: `/api/products/${product.id}/fdcVariantMappings`,
      fetchInit: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(variantMappings)
      }
    });
  };

  const isFdcProduct = product.tags?.includes('fdc');

  return (
    <Accordion key={product.id} slotProps={{ transition: { unmountOnExit: true } }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Stack direction="row" justifyContent="space-between" width="100%">
          <Typography variant="h6">{product.title}</Typography>
          <Stack spacing="20px" direction="row" alignItems="center">

            {variantsMappingData.length > 0 && (
              <Tooltip title="Number of variants">
                <Badge
                  badgeContent={product.fdcVariants.length}
                  color="secondary"
                >
                  <ProductsIcon />
                </Badge>
              </Tooltip>
            )}
            <FormControlLabel
              control={
                <Checkbox
                  style={{
                    width: '50px'
                  }}
                  disabled={isDisabled || product.fdcVariants.length === 0}
                  checked={isFdcProduct}
                  onChange={() => {
                    setDisabled(true);
                    mutateAsync({
                      url: `/api/products/${product.id}`,
                      fetchInit: {
                        method: 'PATCH',
                        headers: {
                          'Content-Type': 'application/json'
                        }
                      }
                    });
                  }}
                />
              }
              sx={{
                '& .MuiFormControlLabel-label.Mui-disabled': {
                  color: isFdcProduct ? 'green' : 'gray'
                }
              }}
              label={isFdcProduct ? 'FDC Product' : 'Not FDC Product'}
              labelPlacement="start"
            />
          </Stack>

        </Stack>
      </AccordionSummary>
      <AccordionDetails>
          <Stack spacing="12px">
            <Stack spacing="12px">
              {
                variantsMappingData.map((variant, index) =>
                  <VariantMappingComponent
                    key={product.id + '_variant_' + index}
                    updateVariantMapping={(update) => updateVariantMapping(index, update)}
                    product={product}
                    variant={variant}
                  />)
              }
            </Stack>

            <Stack
              direction="row"
              justifyContent="space-between"
            >
              <Stack direction="row" spacing="12px">
                {<Button
                  variant="contained"
                  type="button"
                  onClick={() =>
                    setVariantsMappingData([...variantsMappingData, {}])
                  }
                >
                  Add another variant
                </Button>}

                <Button
                  variant="contained"
                  type="button"
                  disabled={variantsInvalid || variantMappingsBeingUpdated }
                  onClick={() => persistUpdatedVariantMappings(variantsMappingData)}
                >
                  Save product variant updates
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </AccordionDetails>
    </Accordion>
  );
}
