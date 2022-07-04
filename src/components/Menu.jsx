import * as React from "react";
import { Link } from "react-router-dom";

export const Menu = ({ isMenuOpen }) => {
  const [menu, setMenu] = React.useState(false);

  if (isMenuOpen === true) {
    setMenu(true);
  }
  return (
    <>
      <div
        value={menu}
        className={`app-menu ${
          isMenuOpen ? "menu-open flex-col items-center p-8" : "hidden"
        }`}
      >
        <h2>Example App Menu</h2>
        <Link onClick={handleMenu} to="/">
          Home
        </Link>
      </div>
      <div
        className="
   text-white "
      ></div>
    </>
  );
};
