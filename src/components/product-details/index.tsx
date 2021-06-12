import React, { useState, useEffect } from 'react';
import { Heading, Text } from '../typography';
import { ProductImageInterface, ProductInterface } from '../../config/types';
import { Section, ColumnContainer, Column, Flex, Spacer } from '../layout';
import Theme from '../../config/theme';
import Button from '../../components/button';
import { useScreenSizes } from '../../hooks';
import environment from '../../util/environment';
import Icon from '../font-awesome-icon';
import ReactMarkdown from 'react-markdown';
import Loader from '../loader';

const ActiveImage = ({
  src,
  imageWidth,
}: {
  src: string;
  imageWidth: number;
}) => {
  const [imageHasLoaded, setImageHasLoaded] = useState(false);
  return (
    <>
      {!imageHasLoaded && (
        <Flex
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          style={{
            zIndex: 9,
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
          <Loader
            type="Circles"
            color={Theme.camaliaColorPalatte.lightShadow}
            size={200}
          />
        </Flex>
      )}
      <img
        src={src}
        style={{
          opacity: imageHasLoaded ? '100%' : '20%',
          width: '100%',
          height: imageWidth,
          objectFit: 'cover',
          borderRadius: '7%',
          boxShadow: '3px 2px 10px 1px rgba(130,120,100,0.26)',
        }}
        onLoad={() => setImageHasLoaded(true)}
      />
    </>
  );
};

const ScrollingImages = ({
  images,
  setActiveImageIndex,
}: {
  images: ProductImageInterface[];
  setActiveImageIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { isMobile } = useScreenSizes();
  const showScrollMessage = isMobile && images.length > 2;
  return (
    <Flex justifyContent="center" flexDirection="column">
      <Flex
        style={{
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          width: '100%',
        }}
      >
        <Flex justifyContent="center">
          {images.map((image, idx) => (
            <a onClick={() => setActiveImageIndex(idx)}>
              <div
                style={{
                  background: 'url(' + image.formats.thumbnail.url + ')',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  width: '100px',
                  height: '100px',
                  borderRadius: '7%',
                  margin: '10px',
                }}
              />
            </a>
          ))}
        </Flex>
      </Flex>
      <Flex justifyContent="center" flexDirection="column">
        <>
          {showScrollMessage && (
            <Text fontSize={1} align="right" color="grey-lighter">
              Scroll for more
            </Text>
          )}
        </>
        <div
          style={{
            marginTop: '-10px',
            width: '100%',
            borderBottom: '1px solid ' + Theme.camaliaColorPalatte.greyishOlive,
          }}
        />
      </Flex>
    </Flex>
  );
};

const MobileImageGallery = ({
  activeImageIndex,
  imageRef,
  productImages,
  imageWidth,
  setActiveImageIndex,
}: {
  activeImageIndex: number;
  imageRef: React.RefObject<HTMLDivElement>;
  productImages: ProductImageInterface[];
  imageWidth: number;
  setActiveImageIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <Flex justifyContent="center">
      <div
        ref={imageRef}
        style={{
          maxWidth: '90%',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <>
          {productImages.map((image, idx) => (
            <div
              style={{ display: activeImageIndex === idx ? 'block' : 'none' }}
            >
              <ActiveImage src={image.url} imageWidth={imageWidth} />
            </div>
          ))}
        </>

        <ScrollingImages
          images={productImages}
          setActiveImageIndex={setActiveImageIndex}
        />
      </div>
    </Flex>
  );
};

const ImageGalleryWithNavigation = ({
  activeImageIndex,
  imageRef,
  productImages,
  imageWidth,
  setActiveImageIndex,
}: {
  activeImageIndex: number;
  imageRef: React.RefObject<HTMLDivElement>;
  productImages: ProductImageInterface[];
  imageWidth: number;
  setActiveImageIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <Flex justifyContent="center" flexDirection="row" alignItems="center">
      <Button
        size="small"
        color="primary"
        style="inverted"
        rounded
        customStyle={{
          marginRight: '20px',
          border: 'none',
          padding: '0',
        }}
        onClick={() => setActiveImageIndex(activeImageIndex - 1)}
        disabled={activeImageIndex <= 0}
      >
        <Icon icon="arrow-alt-circle-left" style={{ fontSize: '40px' }} />
      </Button>
      <>
        {productImages.map((image: ProductImageInterface, idx: number) => (
          <div
            ref={imageRef}
            key={idx}
            style={{
              width: '400px',
              justifyContent: 'center',
              position: 'relative',
              display: activeImageIndex === idx ? 'block' : 'none',
            }}
          >
            <ActiveImage src={image.url} imageWidth={imageWidth} />
          </div>
        ))}
      </>
      <Button
        size="small"
        rounded
        style="inverted"
        color="primary"
        customStyle={{
          marginLeft: '20px',
          border: 'none',
          padding: '0',
        }}
        onClick={() => setActiveImageIndex(activeImageIndex + 1)}
        disabled={activeImageIndex === productImages.length - 1}
      >
        <Icon icon="arrow-alt-circle-right" style={{ fontSize: '40px' }} />
      </Button>
    </Flex>
  );
};

export default ({ product }: { product: ProductInterface }) => {
  const { isMobile, isTablet, isDesktop } = useScreenSizes();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const productImages = product.Images;

  const imageRef = React.useRef<HTMLDivElement>(null);
  const [imageWidth, setImageWidth] = React.useState(400);

  useEffect(() => {
    if (imageRef.current && imageRef.current.clientWidth > 0) {
      setImageWidth(imageRef.current.clientWidth);
    }
  }, [imageRef.current]);

  return (
    <>
      <Section>
        <Spacer height="70px" />
        {product.Description ? (
          <>
            <>
              {!isDesktop && (
                <Flex flexDirection="column" style={{ marginBottom: '20px' }}>
                  <Heading size={3} color="grey-dark" align="left">
                    {product.Name}
                  </Heading>
                  <Text
                    fontSize={2}
                    color="grey-darker"
                    align="left"
                    style={{
                      paddingBottom: '10px',
                      marginTop: '-20px',
                      borderBottom:
                        '1px solid' + Theme.camaliaColorPalatte.greyishOlive,
                    }}
                  >
                    {!product.Sold
                      ? 'R ' +
                        product.Price +
                        '.00' +
                        (product.Negotiable ? ' - negotiable' : '')
                      : 'Sold'}
                  </Text>
                </Flex>
              )}
            </>
            <ColumnContainer centered>
              <Column>
                {!isDesktop ? (
                  <MobileImageGallery
                    activeImageIndex={activeImageIndex}
                    imageRef={imageRef}
                    productImages={productImages}
                    imageWidth={imageWidth}
                    setActiveImageIndex={setActiveImageIndex}
                  />
                ) : (
                  <ImageGalleryWithNavigation
                    activeImageIndex={activeImageIndex}
                    imageRef={imageRef}
                    productImages={productImages}
                    imageWidth={imageWidth}
                    setActiveImageIndex={setActiveImageIndex}
                  />
                )}
              </Column>
              <Column>
                <>
                  {isDesktop && (
                    <>
                      <Heading size={4} color="grey-dark" align="left">
                        {product.Name}
                      </Heading>
                      <Text
                        fontSize={2}
                        color="grey-darker"
                        align="left"
                        style={{
                          marginTop: '-20px',
                          paddingBottom: '10px',
                          borderBottom:
                            '1px solid' +
                            Theme.camaliaColorPalatte.greyishOlive,
                        }}
                      >
                        {!product.Sold
                          ? 'R ' +
                            product.Price +
                            '.00' +
                            (product.Negotiable ? ' - negotiable' : '')
                          : 'Sold'}
                      </Text>
                    </>
                  )}
                </>

                <Text fontSize={2} color="grey" align="left">
                  <ReactMarkdown>{product.Description}</ReactMarkdown>
                </Text>
                <Flex style={{ marginTop: '50px' }} justifyContent="center">
                  <Button size="medium" color="primary" rounded>
                    Contact supplier
                  </Button>
                </Flex>
              </Column>
            </ColumnContainer>
          </>
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
    </>
  );
};
