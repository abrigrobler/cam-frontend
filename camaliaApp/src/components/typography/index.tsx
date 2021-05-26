import React from 'react';
import { useResponsiveStyle } from '../../hooks';

export function HeroBanner({
  variant,
  title,
  subtitle,
  hasGradient,
  mt,
}: {
  variant: string;
  title: string;
  subtitle: string;
  hasGradient?: boolean;
  mt: number;
}) {
  //Based on Bulma.io's Hero Banner
  //See https://bulma.io/documentation/layout/hero/ for variants
  const bannerVariant = hasGradient
    ? 'hero is-' + variant + ' is-bold'
    : 'hero is-' + variant;

  const bannerStyle: React.CSSProperties = {
    marginTop: mt.toString() + 'px',
    alignContent: 'center',
  };
  return (
    <section className={bannerVariant} style={bannerStyle}>
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered">{title}</h1>
          <h2 className="subtitle has-text-centered">{subtitle}</h2>
        </div>
      </div>
    </section>
  );
}

export function Heading({
  size,
  align,
  isSubtitle,
  children,
  id,
  color,
  style,
}: {
  size: number | number[];
  align: 'left' | 'right' | 'centered' | 'justified';
  isSubtitle?: boolean;
  children: string;
  id?: any;
  color:
    | 'white'
    | 'black'
    | 'light'
    | 'dark'
    | 'primary'
    | 'success'
    | 'danger'
    | 'grey-lighter'
    | 'grey-light'
    | 'grey'
    | 'grey-light'
    | 'grey-darker'
    | 'grey-dark';
  style?: {};
}) {
  //Based on Bulma.io's Title
  const headingClass = isSubtitle
    ? 'subtitle is-' + (7 - useResponsiveStyle(size)).toString()
    : 'title is-' +
      (7 - useResponsiveStyle(size)).toString() +
      ' has-text-' +
      align +
      ' has-text-' +
      color;

  return (
    <p className={headingClass} id={id} style={style ? style : {}}>
      {children}
    </p>
  );
}

export function Text({
  fontSize = 2,
  align = 'centered',
  weight,
  textTransform,
  children,
  color = 'black',
  style,
}: {
  fontSize?: number;
  align?: 'left' | 'right' | 'centered' | 'justified';
  weight?: string;
  textTransform?: string;
  children: string | JSX.Element[] | JSX.Element;
  color?:
    | 'white'
    | 'black'
    | 'light'
    | 'dark'
    | 'primary'
    | 'success'
    | 'danger'
    | 'grey-lighter'
    | 'grey-light'
    | 'grey'
    | 'grey-light'
    | 'grey-darker'
    | 'grey-dark';
  style?: {};
}) {
  //See https://bulma.io/documentation/helpers/typography-helpers/ for parameters. Note that I have reversed the order of font sizes.
  const textClass =
    'is-size-' +
    (8 - fontSize).toString() +
    ' has-text-' +
    align +
    (weight ? ' has-text-weight-' + weight : '') +
    (textTransform ? ' is-' + textTransform : '') +
    ' has-text-' +
    color;

  return (
    <div className="content" style={style ? style : {}}>
      <span>
        <p className={textClass}>{children}</p>
      </span>
    </div>
  );
}
