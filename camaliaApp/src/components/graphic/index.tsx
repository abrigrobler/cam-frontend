import React from 'react';

export default function Graphic({
  src,
  size,
  isRounded,
  alt,
  ratio,
  shouldCrop,
}: {
  src: string;
  size?: 16 | 24 | 32 | 48 | 64 | 96 | 128;
  isRounded?: boolean;
  alt: string;
  ratio?:
    | '1by1'
    | '5by4'
    | '4by3'
    | '3by2'
    | '5by3'
    | '16by9'
    | '2by1'
    | '3by1'
    | '4by5'
    | '3by4'
    | '2by3'
    | '3by5'
    | '9by16'
    | '1by2'
    | '1by3';
  shouldCrop?: boolean;
}) {
  const graphicClassName =
    'image' +
    (size ? ' is-' + size.toString() + 'x' + size.toString() : '') +
    (ratio ? ' is-' + ratio : '') +
    ' container';

  const imgStyle = shouldCrop
    ? { backgroundSize: 'cover', backgroundPosition: 'center center' }
    : {};

  return (
    <figure className={graphicClassName}>
      <img
        className={isRounded ? 'is-rounded' : ''}
        src={src}
        alt={alt}
        style={imgStyle}
      />
    </figure>
  );
}
