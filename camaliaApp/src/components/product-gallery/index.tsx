import React from 'react';
import { Flex, Grid, Section } from '../layout';
import { Heading } from '../typography';
import Product from '../product';
import Loader from '../loader';
import Theme from '../../config/theme';
import { ProductInterface } from '../../config/types';

export default ({ products }: { products: ProductInterface[] }) => {
  const canShowProducts = products.length > 0;
  return (
    <Section style={{ marginTop: '-40px' }}>
      <>
        {!canShowProducts && (
          <Heading size={1} color="grey-light" align="centered">
            There are no products in this category (yet)
          </Heading>
        )}
      </>
      {products ? (
        <Flex flexWrap="wrap" justifyContent="center">
          <Grid
            columns={['1fr 1fr', '1fr 1fr 1fr 1fr 1fr 1fr']}
            columnGap={['20px', '40px']}
            rowGap="20px"
          >
            {products.map((product) => (
              <Flex alignContent="flex-start">
                <Product
                  productId={product.id}
                  name={product.Name}
                  price={product.Price}
                  images={product.Images}
                />
              </Flex>
            ))}
          </Grid>
        </Flex>
      ) : (
        <Flex justifyContent="center">
          <Loader
            type="Circles"
            color={Theme.camaliaColorPalatte.greyishOlive}
            size={100}
          />
        </Flex>
      )}
    </Section>
  );
};
