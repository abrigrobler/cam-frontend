import React from 'react';
import './button-style.css';

export default function Button({
  color,
  size,
  style,
  fullwdith,
  loading,
  disabled,
  onClick,
  rounded,
  customStyle,
  children,
}: {
  color?:
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'light'
    | 'dark'
    | 'black'
    | 'text';
  size: 'small' | 'normal' | 'medium' | 'large';
  style?: 'outlined' | 'inverted';
  fullwdith?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  rounded?: boolean;
  customStyle?: {};
  children?: string | JSX.Element | JSX.Element[];
}) {
  //Based on Bulma.io's Button
  const buttonClassName =
    'button' +
    (rounded ? ' is-rounded' : '') +
    (color ? ' is-' + color : '') +
    ' is-' +
    size +
    (style ? ' is-' + style : '') +
    (fullwdith ? ' is-fullwidth' : '') +
    (loading ? ' is-loading' : '');

  return (
    <button
      disabled={disabled}
      className={buttonClassName}
      onClick={onClick}
      style={customStyle}
    >
      {children && <span>{children}</span>}
    </button>
  );
}
