import {
  Button,
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
  const [variantsMappingData, setVariantsMappingData] = useState([{}]);

  function updateVariantMapping(index, update) {
    if (!update){
      setVariantsMappingData(variantsMappingData.filter((_, i) => i !== index));
    } else {
      setVariantsMappingData(variantsMappingData.map((variant, i) => i == index? update : variant))
    }
  }

  const variantsInvalid = variantsMappingData.some(({selectedVariantA, selectedVariantB, noOfItemPerCase}) => (
    !selectedVariantA ||  !selectedVariantB || !noOfItemPerCase
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

  const isFdcProduct = product.tags?.includes('fdc');

  console.log("Rerendering:", variantsMappingData)

  return (
    <Accordion key={product.id}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Stack direction="row" justifyContent="space-between" width="100%">
          <Typography variant="h6">{product.title}</Typography>
          <Stack spacing="20px" direction="row" alignItems="center">

            {/* {exitingProduct?.variants?.length > 0 && (
              <Tooltip title="Number of variants">
                <Badge
                  badgeContent={numberOfExitingProductVariants}
                  color="secondary"
                >
                  <ProductsIcon />
                </Badge>
              </Tooltip>
            )} */}
            {/* {exitingProduct?.variants?.length > 0 && (
              <Tooltip
                title={`Number of excess items`}
              >
                <Badge
                  showZero
                  badgeContent={
                    numberOfExcessOutstandingItems === 0
                      ? 0
                      : `+${numberOfExcessOutstandingItems}`
                  }
                  color="primary"
                >
                  <ItemsIcon />
                </Badge>
              </Tooltip>
            )} */}

            <FormControlLabel
              control={
                <Checkbox
                  style={{
                    width: '50px'
                  }}
                  disabled={isDisabled}
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
                  disabled={variantsInvalid}
                  onClick={() => alert("implement me")}
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
