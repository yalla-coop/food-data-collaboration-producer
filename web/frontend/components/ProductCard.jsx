import {
  Checkbox,
  FormControlLabel,
  Stack,
  Typography
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import React from 'react';
import { useQueryClient } from 'react-query';
import { useAppMutation } from '../hooks';
import { ExpandMoreIcon } from './ExpandMoreIcon';
import { VariantMappingComponent } from './VariantMapping';
import { VariantComponent } from './Variant';

export function ProductCard({ product, variantMappingEnabled }) {
  const queryClient = useQueryClient();

  function updateOrReplace(fdcVariants, updatedVariant, variables) {
    const method = variables.fetchInit.method;
    if (method === 'PUT') {
      return [...fdcVariants, updatedVariant];
    } else if (method === 'POST') {
      return fdcVariants.map(variant => {
        return variant.id === updatedVariant.id ? updatedVariant : variant;
      })
    } else if (method === 'DELETE') {
      return fdcVariants.filter(variant => variant.id !== variables.variantId);
    } else {
      throw new Error(`dont know how to handle ${method$}`);
    }
  }

  const { mutateAsync: mutateMapping, isFetching: productsLoading } = useAppMutation({
    reactQueryOptions: {
      onSuccess: (updatedVariant, variables) => {
        queryClient.setQueryData('/api/products', (query) => {
          const updatedProducts = query?.products?.map(existingProduct => {
            if (existingProduct.id === product.id) {
              return {
                ...existingProduct,
                fdcVariants: updateOrReplace(existingProduct.fdcVariants, updatedVariant, variables)
              }
            } else {
              return existingProduct;
            }
          });

          return {
            ...query,
            products: updatedProducts
          };
        });
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

  const isFdcProduct = !!product.fdcVariants.find(({ enabled }) => enabled);
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
                  disabled={true}
                  checked={isFdcProduct}
                />
              }
              sx={{
                '& .MuiFormControlLabel-label': {
                  color: hasVariantMapped && isFdcProduct ? 'green !important' : isFdcProduct ? 'red !important' : 'gray'
                }
              }}
              label={isFdcProduct ? 'Has FDC Enabled Variants' : 'Not FDC Product'}
              labelPlacement="start"
            />
          </Stack>

        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing="12px">
          {variantMappingEnabled ?
            <VariantMappingComponent
              key={product.id + '_variant' + (product.fdcVariants.length ? '' : '_missing')}
              mutateMapping={mutateMapping}
              product={product}
              variant={product.fdcVariants[0]}
              loadingInProgress={variantMappingsBeingUpdated || variantMappingUpdateStatus === 'loading' || productsLoading}
            />
            :
            product.variants.map((variant, i) =>
            (<VariantComponent
              key={`${product.id}_variant_${i}'`}
              product={product}
              variant={variant}
              fdcVariants={product.fdcVariants}
              mutateMapping={mutateMapping}
            />))
          }
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
