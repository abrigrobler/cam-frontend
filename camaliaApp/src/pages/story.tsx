import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Theme from '../config/theme';
import { Heading, HeroBanner, Text } from '../components/typography';
import Navbar from '../components/navbar';
import { ProductInterface } from '../config/types';
import {
  Section,
  ColumnContainer,
  Column,
  ColumnSpacer,
  Flex,
  Spacer,
} from '../components/layout';

export default () => {
  return (
    <>
      <Spacer height="70px" />
      <Section>
        <Text fontSize={5} color="grey" align="centered">
          The Camalia story
        </Text>
      </Section>
    </>
  );
};
