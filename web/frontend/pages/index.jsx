import {
  Stack
} from '@mui/material';
import { Loading } from '@shopify/app-bridge-react';
import { Card, SkeletonBodyText } from '@shopify/polaris';
import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { useAppQuery } from '../hooks';

export default function HomePage() {

  const { data, isLoading } = useAppQuery({
    url: '/api/products'
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
        Select a product to make it an FDC product.
      </p>
      <Stack spacing="12px" px="60px" py="12px">
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </Stack>
    </div>
  );
}
