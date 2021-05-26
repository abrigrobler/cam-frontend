import React from 'react';
import { useScreenSizes, useResponsiveStyle } from '../../hooks';

export function Section({
  className,
  children,
  size,
  mt,
  mb,
  pt,
  pb,
  style,
}: {
  className?: string;
  children?: JSX.Element[] | JSX.Element | string;
  size?: 'medium' | 'large';
  mt?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  mb?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  pt?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  pb?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  style?: {};
}) {
  //Based on Bulma.io's Section
  const sectionClassName =
    (className ? 'section ' + className : 'section') +
    (mt ? ' mt-' + mt.toString() : '') +
    (mb ? ' mb-' + mb.toString() : '') +
    (pt ? ' pt-' + pt.toString() : '') +
    (pb ? ' pb-' + pb.toString() : '') +
    (size ? ' is-' + size : '');

  return (
    <section className={sectionClassName} style={style ? style : {}}>
      <div className="container">{children}</div>
    </section>
  );
}

export function ColumnContainer({
  gap,
  centered,
  isGapless,
  children,
}: {
  centered?: boolean;
  gap?: number;
  isGapless?: boolean;
  children: JSX.Element | JSX.Element[];
}) {
  //Based on Bulma.io's Columns
  const className =
    'columns' +
    (gap ? ' is-' + gap.toString() : '') +
    (isGapless ? ' is-gapless' : '') +
    (centered ? ' is-centered' : '');

  return <div className={className}>{children}</div>;
}

export function Column({
  size,
  offset,
  isNarrowMobile,
  isNarrowTablet,
  isNarrowDesktop,
  children,
}: {
  size?: number;
  offset?: number;
  isNarrowMobile?: boolean;
  isNarrowTablet?: boolean;
  isNarrowDesktop?: boolean;
  children?: JSX.Element | JSX.Element[];
}) {
  const columnClass =
    'column' +
    (size ? ' is-' + size.toString() : '') +
    (offset ? ' is-offset-' + offset.toString() : '') +
    (isNarrowMobile ? ' is-narrow-mobile' : '') +
    (isNarrowTablet ? ' is-narrow-tablet' : '') +
    (isNarrowDesktop ? ' is-narrow-desktop' : '');
  //Based on Bulma.io's Column
  return <div className={columnClass}>{children}</div>;
}

export function ColumnSpacer({ size }: { size: number }) {
  return <div className={'column is-' + size.toString()}></div>;
}

export function Flex({
  flexDirection,
  flexWrap,
  justifyContent,
  alignContent,
  alignItems,
  alignSelf,
  flexGrow,
  flexShrink,
  mt,
  mb,
  pt,
  pb,
  isFlexTablet,
  isFlexDesktop,
  style,
  children,
}: {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-evenly';
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-evenly';
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center';
  alignSelf?: 'auto' | 'center' | 'stretch';
  flexGrow?: 0 | 1 | 2 | 3 | 4 | 5;
  flexShrink?: 0 | 1 | 2 | 3 | 4 | 5;
  isFlexTablet?: boolean;
  isFlexDesktop?: boolean;
  mt?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  mb?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  pt?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  pb?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  style?: {};
  children: string | JSX.Element | JSX.Element[];
}) {
  const className = isFlexDesktop
    ? 'is-flex-desktop'
    : isFlexTablet
    ? 'is-flex-tablet'
    : 'is-flex' +
      (flexDirection ? ' is-flex-direction-' + flexDirection : '') +
      (justifyContent ? ' is-justify-content-' + justifyContent : '') +
      (alignContent ? ' is-align-content-' + alignContent : '') +
      (alignItems ? ' is-align-items-' + alignItems : '') +
      (alignSelf ? ' is-align-self-' + alignSelf : '') +
      (flexWrap ? ' is-flex-wrap-' + flexWrap : '') +
      (flexGrow ? ' is-flex-grow-' + flexGrow.toString() : '') +
      (mt ? ' mt-' + mt.toString() : '') +
      (mb ? ' mb-' + mb.toString() : '') +
      (pt ? ' pt-' + pt.toString() : '') +
      (pb ? ' pb-' + pb.toString() : '');

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

export function Spacer({ height }: { height: string }) {
  return <div style={{ marginTop: height }}></div>;
}

export const Grid = ({
  rows,
  columns,
  rowGap,
  columnGap,
  children,
}: {
  rows?: string[] | string;
  columns?: string[] | string;
  rowGap?: string[] | string;
  columnGap?: string[] | string;
  children: string | JSX.Element | JSX.Element[];
}) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: useResponsiveStyle(columns),
        gridTemplateRows: useResponsiveStyle(rows),
        rowGap: useResponsiveStyle(rowGap),
        columnGap: useResponsiveStyle(columnGap),
      }}
    >
      {children}
    </div>
  );
};
