import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/product-details';
import { useGetProductById } from '../hooks';
import { Text } from '../components/typography';
import { ProductInterface } from '../config/types';

const convertParams = (val: string) => {};

export default () => {
  const { productId } = useParams<{ productId: string }>();
  const { product, loading, completed } = useGetProductById(productId.slice(1));

  return completed && product ? (
    <ProductDetails product={product} />
  ) : (
    <Text>{'Loading product...'}</Text>
  );
};
