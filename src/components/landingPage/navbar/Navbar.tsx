import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [navColor, setNavColor] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeNavColor = () => {
    if (window.scrollY >= 10) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener("scroll", changeNavColor);

  return (
    <div className={navColor || menuOpen ? "nav scrollNav" : "nav"}>
      <div className="navLogo">
        <Link to="/">News App</Link>
      </div>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : "navMenu"}>
        <li>
          <NavLink to="news">News</NavLink>
        </li>
        <li>
          <NavLink to="guardian-news">The Guardian News</NavLink>
        </li>
        <li>
          <NavLink to="new-york-times-news">New York Times News</NavLink>
        </li>
        <li>
          <NavLink to="favorites">Favorites</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
