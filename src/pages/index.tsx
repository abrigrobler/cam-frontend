import React, { useState, useEffect } from 'react';
import Theme from '../config/theme';
import { Heading, Text } from '../components/typography';
import Navbar from '../components/navbar';
import { ProductInterface } from '../config/types';
import {
  Section,
  Grid,
  ColumnContainer,
  Column,
  ColumnSpacer,
  Flex,
  Spacer,
} from '../components/layout';
import Graphic from '../components/graphic';
import CamaliaLogo from '../resources/images/logo_512.png';
import { useScreenSizes } from '../hooks';
import Product from '../components/product';
import Loader from '../components/loader';
import ProductGallery from '../components/product-gallery';
import { ReactComponent as FacebookIcon } from '../resources/images/facebook.icon.svg';

export default ({
  products,
  productCategories,
}: {
  products: ProductInterface[];
  productCategories: string[];
}) => {
  const { isMobile, isTablet, isDesktop } = useScreenSizes();

  const gradientBorder =
    'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(165,165,141,1) 14%, rgba(165,165,141,1) 50%, rgba(165,165,141,1) 86%, rgba(255,255,255,0) 100%)';

  return (
    <>
      <Spacer height="70px" />
      <Section className="has-background-white-bis" mb={4}>
        <ColumnContainer centered>
          <Column size={6}>
            <Flex style={{ width: isMobile ? '100%' : '50%' }}>
              <Graphic src={CamaliaLogo} alt="Camalia Logo" />
            </Flex>
          </Column>
          <Column>
            <div
              style={{
                height: '100%',
                width: '1px',
                background: gradientBorder,
              }}
            ></div>
          </Column>

          <Column size={6}>
            <Flex
              style={{ height: '100%' }}
              flexDirection="column"
              alignContent="center"
              mt={5}
            >
              <Text fontSize={3} color="grey-light" align="left">
                Camalia is a treasure trove of once-upon-a-time jewellery,
                china, accessories and other collectables for the antique and
                vintage lover.
              </Text>
              <a
                href="https://www.facebook.com/groups/292953344376869/"
                target="_blank"
              >
                <Flex
                  flexDirection="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <FacebookIcon
                    fill={Theme.camaliaColorPalatte.greyishOlive}
                    height="30px"
                  />
                  <Text
                    fontSize={2}
                    color="grey-lighter"
                    align="left"
                    style={{ marginLeft: '10px' }}
                  >
                    Visit us on Facebook
                  </Text>
                </Flex>
              </a>
            </Flex>
          </Column>
        </ColumnContainer>
      </Section>
      <Heading size={isMobile ? 2 : 3} align="centered" color="primary">
        See what's new on Camalia
      </Heading>
      <ProductGallery products={products} />
      <Text fontSize={isMobile ? 1 : 2} align="centered" color="grey-lighter">
        Want more? Have a look at the products tab!
      </Text>
    </>
  );
};
