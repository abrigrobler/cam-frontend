import React from 'react';
import Theme from '../../config/theme';
import { Link } from 'react-router-dom';

function MobileMenuItem({
  item,
  routerPath,
  hasSubMenu,
  subMenuItems,
  setShowMobileMenu,
}: {
  item: string;
  routerPath?: string;
  hasSubMenu?: boolean;
  subMenuItems?: string[];
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [subMenuActive, setSubMenuActive] = React.useState(false);

  const onClickCallback = () => {
    hasSubMenu
      ? setSubMenuActive((subMenuActive) => !subMenuActive)
      : setShowMobileMenu(false);
  };

  return (
    <li>
      {routerPath ? (
        <Link
          className="navbar-item has-text-centered"
          onClick={onClickCallback}
          to={routerPath}
        >
          {item}
        </Link>
      ) : (
        <>
          <a
            className="navbar-item has-text-centered"
            onClick={onClickCallback}
          >
            {item}
          </a>
          {subMenuActive && (
            <ul>
              {subMenuItems &&
                subMenuItems.map((subItem) => (
                  <li>
                    <Link
                      to={'/categories/' + subItem.toLowerCase()}
                      onClick={() => setShowMobileMenu(false)}
                    >
                      {subItem}
                    </Link>
                  </li>
                ))}
            </ul>
          )}
        </>
      )}
    </li>
  );
}

function MobileOnlyMenu({
  setShowMobileMenu,
  productCategories,
}: {
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  productCategories?: string[];
}) {
  const menuStyle: React.CSSProperties = {
    width: '100%',
    background: Theme.camaliaColorPalatte.white,
    position: 'relative',
    zIndex: 1,
  };

  return (
    <aside className="menu" style={menuStyle}>
      <ul className="menu-list">
        <MobileMenuItem
          item="Home"
          setShowMobileMenu={setShowMobileMenu}
          routerPath="/"
        />
        <MobileMenuItem
          item="Story"
          setShowMobileMenu={setShowMobileMenu}
          routerPath="/story"
        />
        <MobileMenuItem
          item="Products"
          hasSubMenu
          subMenuItems={productCategories}
          setShowMobileMenu={setShowMobileMenu}
        />
      </ul>
    </aside>
  );
}

export default MobileOnlyMenu;
