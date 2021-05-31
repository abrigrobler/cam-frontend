import { Heading } from '../typography';
import { Flex } from '../layout';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';
import Theme from '../../config/theme';
import { useState } from 'react';
import Loader from '../loader';

export const ProductImage = ({ src, alt }: { src?: string; alt?: string }) => {
  const [imageHasLoaded, setimageHasLoaded] = useState(false);

  const containerStyle = {
    backgroundColor: 'rgba(0,0,0,0.0)',
    marginBottom: '7px',
    maxHeight: '200px',
    borderRadius: '7%',
    border: imageHasLoaded
      ? 'none'
      : '1px solid ' + Theme.camaliaColorPalatte.lightShadow,
  };

  const imageStyle = style({
    opacity: imageHasLoaded ? '100%' : '0%',
    maxHeight: '200px',
    minHeight: '110px',
    objectFit: 'cover',
    borderRadius: '7%',
    boxShadow: '3px 2px 10px 1px rgba(130,120,100,0.26)',
    transition: 'all .3s ease',
    $nest: {
      '&:hover': {
        boxShadow: '4px 3px 10px 1px rgba(130,120,100,0.3)',
        transform: 'scale(1.02)',
      },
    },
  });

  return (
    <>
      {src && alt ? (
        <figure className="image" style={containerStyle}>
          {!imageHasLoaded && (
            <Flex
              justifyContent="center"
              alignContent="center"
              alignItems="center"
              style={{
                zIndex: 9,
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            >
              <Loader
                type="Circles"
                size={100}
                color={Theme.camaliaColorPalatte.lightShadow}
              />
            </Flex>
          )}
          <img
            className={imageStyle}
            src={src}
            alt={alt}
            onLoad={() => setimageHasLoaded(true)}
          />
        </figure>
      ) : (
        <p>source not valid</p>
      )}
    </>
  );
};

export default ({
  name,
  images,
  price,
  productId,
}: {
  name: string;
  images: any[];
  price?: number;
  productId: string;
}) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      mb={3}
      style={{
        maxWidth: '250px',
      }}
    >
      <Link to={'/products/:' + productId} replace>
        <ProductImage
          src={images[0] ? images[0].url : ''}
          alt={images[0] ? images[0].name : 'Image not found'}
        />
        <Heading size={[1, 2]} color="grey" align="left">
          {name}
        </Heading>
        <Heading isSubtitle size={1} color="grey-dark" align="left">
          {price ? 'R ' + price.toString() + '.00' : 'Contact supplier'}
        </Heading>
      </Link>
    </Flex>
  );
};
