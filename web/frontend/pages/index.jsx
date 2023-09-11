import React, { useState } from 'react';
import { Card, SkeletonBodyText, Checkbox } from '@shopify/polaris';
import { Loading } from '@shopify/app-bridge-react';
import { useQueryClient } from 'react-query';
import { useAppQuery, useAppMutation } from '../hooks';

export default function HomePage() {
  const queryClient = useQueryClient();

  const [disabledProductCheckbox, setDisabledProductCheckbox] = useState(false);

  const { data, isLoading } = useAppQuery({
    url: '/api/products'
  });

  const { mutateAsync } = useAppMutation({
    reactQueryOptions: {
      onSettled: (updateProductData) => {
        setDisabledProductCheckbox((x) => ({
          ...x,
          [updateProductData.product.id]: false
        }));
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

  const products = data?.products;

  if (isLoading) {
    return (
      <Card sectioned>
        <Loading />
        <SkeletonBodyText />
      </Card>
    );
  }

  return (
    <div>
      <h1
        style={{
          textAlign: 'center'
        }}
      >
        Products
      </h1>
      <p
        style={{
          textAlign: 'center'
        }}
      >
        {' '}
        Select a product to make it an FDC product.
      </p>
      <ul>
        {products?.map((p) => {
          const isFdcProduct = p?.tags?.includes('fdc');
          return (
            <li key={p.id}>
              <div
                style={{
                  width: '500px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Checkbox
                  style={{
                    width: '50px'
                  }}
                  disabled={disabledProductCheckbox[p.id]}
                  checked={isFdcProduct}
                  onChange={() => {
                    setDisabledProductCheckbox((x) => ({
                      ...x,
                      [p.id]: true
                    }));
                    mutateAsync({
                      url: `/api/products/${p.id}`,
                      fetchInit: {
                        method: 'PATCH',
                        headers: {
                          'Content-Type': 'application/json'
                        }
                      }
                    });
                  }}
                />
                <p
                  style={{
                    marginLeft: '20px',
                    textAlign: 'left'
                  }}
                >
                  {p.title}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
