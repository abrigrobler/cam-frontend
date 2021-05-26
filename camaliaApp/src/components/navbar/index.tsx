import React, { useEffect, useState } from 'react';
import Theme from '../../config/theme';
import MobileOnlyMenu from '../mobile-only-menu';
import Button from '../button/index';
import { Link } from 'react-router-dom';

const NavbarMenuItem = ({
  item,
  routerPath,
}: {
  item: string;
  routerPath?: string;
}) => {
  return (
    <>
      {routerPath ? (
        <Link
          className="navbar-item"
          to={routerPath}
          style={{ color: 'black' }}
        >
          {item}
        </Link>
      ) : (
        <></>
      )}
    </>
  );
};

const NavbarDropdown = ({
  menuItem,
  dropdownItems,
}: {
  menuItem: string;
  dropdownItems?: string[];
}) => {
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);
  if (!dropdownItems) {
    return null;
  }
  useEffect(() => {
    return setShowDropDownMenu(true);
  }, [showDropDownMenu]);
  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <a className="navbar-link">{menuItem}</a>
      {showDropDownMenu && (
        <div className="navbar-dropdown is-boxed" style={{ boxShadow: 'none' }}>
          {dropdownItems.map((item, idx) => (
            <Link
              to={'/categories/' + item.toLowerCase()}
              replace
              style={{ color: 'black' }}
            >
              <a
                className="navbar-item"
                style={{ textTransform: 'capitalize' }}
                onClick={() => setShowDropDownMenu(false)}
              >
                {item}
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ({
  logo,
  alt,
  hasBorder,
  hasShadow,
  productCategories,
}: {
  logo: string;
  alt: string;
  hasBorder?: boolean;
  hasShadow?: boolean;
  productCategories?: string[];
}) => {
  const logoStyle: React.CSSProperties = {
    marginTop: '10px',
    marginLeft: '10px',
    maxHeight: '60px',
    width: 'auto',
    marginRight: '10px',
  };

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navBarStyle: React.CSSProperties = {
    width: '100%',
    background: Theme.camaliaColorPalatte.white,
    boxShadow: hasShadow
      ? '0 1px 6px 0px' + Theme.camaliaColorPalatte.lightShadow
      : 'none',
    borderBottom: hasBorder
      ? '1px solid #9e9e9e' + Theme.camaliaColorPalatte.lightBorder
      : 'none',
    top: 0,
    position: 'fixed',
  };

  return (
    <>
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        style={navBarStyle}
      >
        <div className="navbar-brand">
          <Link to="/">
            <img src={logo} alt={alt} style={logoStyle} />
          </Link>
          <div
            role="button"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            style={{ background: Theme.camaliaColorPalatte.white }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <NavbarMenuItem item="Home" routerPath="/" />
            <NavbarMenuItem item="Story" routerPath="/story" />
            <NavbarDropdown
              dropdownItems={productCategories}
              menuItem="Products"
            />
          </div>
        </div>
        {showMobileMenu && (
          <MobileOnlyMenu
            setShowMobileMenu={setShowMobileMenu}
            productCategories={productCategories}
          />
        )}
      </nav>
    </>
  );
};
