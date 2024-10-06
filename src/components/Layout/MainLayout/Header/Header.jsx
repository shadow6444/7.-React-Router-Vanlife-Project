import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="page-header">
      <Link className="header-logo" to="/">
        #VANLIFE
      </Link>
      <nav className="navbar">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to="./vans"
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
