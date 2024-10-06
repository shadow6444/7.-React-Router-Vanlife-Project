import "./Header.css";

import { Link, NavLink } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }
  return (
    <header className="page-header">
      <Link className="header-logo" to="/">
        #VANLIFE
      </Link>
      <nav className="navbar">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to="host"
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to="about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink to="login">
          <RxAvatar className="login-link" />
        </NavLink>
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  );
};

export default Header;
