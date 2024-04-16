import {
  Checkbox,
  FormControlLabel,
  Stack,
  Typography
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { useAppMutation } from '../hooks';
import { ExpandMoreIcon } from './ExpandMoreIcon';
import { VariantMappingComponent } from './VariantMapping';

export function ProductCard({ product }) {
  const queryClient = useQueryClient();
  const [isDisabled, setDisabled] = useState(false);

  function saveVariantMapping(update) {
    if (!update) {
      persistUpdatedVariantMappings([]);
    } else {
      persistUpdatedVariantMappings([update]);
    }
  }

  const { mutateAsync, isFetching: productsLoading } = useAppMutation({
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
          updatedProducts[productIndex] = {...updateProductData.product, fdcVariants: updatedProducts[productIndex].fdcVariants};

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
    status: variantMappingUpdateStatus,
    isFetching: variantMappingsBeingUpdated
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
  const hasVariantMapped = !!product.fdcVariants[0];

  return (
    <Accordion key={product.id} slotProps={{ transition: { unmountOnExit: true } }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Stack direction="row" justifyContent="space-between" width="100%">
          <Typography variant="h6">{product.title}</Typography>
          <Stack spacing="20px" direction="row" alignItems="center">
            <FormControlLabel
              style={{ pointerEvents: "none" }}
              control={
                <Checkbox
                  style={{
                    width: '50px',
                    pointerEvents: 'auto'
                  }}
                  disabled={isDisabled || product.fdcVariants.length === 0}
                  checked={isFdcProduct}
                  onClick={(event) => {
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
                    event.stopPropagation();
                  }}
                />
              }
              sx={{
                '& .MuiFormControlLabel-label': {
                  color: hasVariantMapped && isFdcProduct ? 'green' : isFdcProduct ? 'red !important' : 'gray'
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
            <VariantMappingComponent
              key={product.id + '_variant' +  (product.fdcVariants.length ? '' : '_missing')}
              saveVariantMapping={saveVariantMapping}
              product={product}
              variant={product.fdcVariants[0]}
              loadingInProgress={variantMappingsBeingUpdated || variantMappingUpdateStatus === 'loading' || productsLoading}
            />
          </Stack>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
