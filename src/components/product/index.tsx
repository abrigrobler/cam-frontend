import { Heading } from '../typography';
import { Flex } from '../layout';
import environment from '../../util/environment';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';
import Theme from '../../config/theme';

export const ProductImage = ({ src, alt }: { src?: string; alt?: string }) => {
  const containerStyle = {
    backgroundColor: 'rgba(0,0,0,0.0)',
    marginBottom: '7px',
  };

  const imageStyle = style({
    maxHeight: '200px',
    objectFit: 'cover',
    borderRadius: '7%',
    boxShadow: '3px 2px 10px 1px rgba(130,120,100,0.26)',
    transition: 'box-shadow .5s',
    $nest: {
      '&:hover': {
        boxShadow: '5px 4px 10px 1px ' + Theme.camaliaColorPalatte.warmGrey,
      },
    },
  });

  return (
    <>
      {src && alt ? (
        <figure className="image" style={containerStyle}>
          <img className={imageStyle} src={src} alt={alt} />
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
          src={environment.db_URL + images[0].url}
          alt={images[0].name}
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
