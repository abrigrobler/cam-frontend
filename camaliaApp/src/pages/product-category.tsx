import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Theme from '../config/theme';
import { Heading, HeroBanner, Text } from '../components/typography';
import Navbar from '../components/navbar';
import { ProductInterface } from '../config/types';
import { Section, Spacer } from '../components/layout';
import ProductGallery from '../components/product-gallery';

export default ({ products }: { products: ProductInterface[] }) => {
  let { category } = useParams<{ category: string }>();

  const filteredProducts = products.filter(
    (product) => product.Category === category
  );

  return (
    <>
      <Spacer height="70px" />
      <Section className="has-background-white-bis">
        <Heading size={6} align="left" color="grey-light">
          Camalia fine things
        </Heading>
        <Heading
          size={2}
          align="left"
          color="grey-light"
          style={{ textTransform: 'capitalize' }}
        >
          {category}
        </Heading>
      </Section>
      <Spacer height="20px" />
      <ProductGallery products={filteredProducts} />
    </>
  );
};
