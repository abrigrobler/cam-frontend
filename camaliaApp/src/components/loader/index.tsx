import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Heading, Text } from '../typography';
import { Flex } from '../layout';

export default ({
  type,
  color,
  size,
  visible,
}: {
  type:
    | 'Audio'
    | 'BallTriangle'
    | 'Bars'
    | 'Circles'
    | 'Grid'
    | 'Hearts'
    | 'Oval'
    | 'Puff'
    | 'Rings'
    | 'TailSpin'
    | 'ThreeDots'
    | 'Watch'
    | 'RevolvingDot'
    | 'Triangle'
    | 'Plane'
    | 'MutatingDots'
    | 'CradleLoader';
  color: string;
  size: number;
  visible?: boolean;
}) => {
  return (
    <Flex justifyContent="center" flexDirection="column">
      <Loader
        type={type}
        color={color}
        height={size}
        width={size}
        visible={visible}
      />
    </Flex>
  );
};
