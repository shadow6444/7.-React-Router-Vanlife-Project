import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="page-header">
      <Link className="header-logo" to="/">
        #VANLIFE
      </Link>
      <nav className="navbar">
        <Link className="nav-links" to="/host">
          Host
        </Link>
        <Link className="nav-links" to="/about">
          About
        </Link>
        <Link className="nav-links" to="./vans">
          Vans
        </Link>
      </nav>
    </header>
  );
};

export default Header;
