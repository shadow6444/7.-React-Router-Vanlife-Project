import "./App.css";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
function App() {
  return (
    <Router>
      <header className="page-header">
        <Link className="header-logo" to="/">
          #VANLIFE
        </Link>
        <nav className="navbar">
          <Link className="nav-links" to="/about">
            About
          </Link>
          <Link className="nav-links" to="./vans">
            Vans
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer className="page-footer">
        <p>Ⓒ 2022 #VANLIFE</p>
      </footer>
    </Router>
  );
}

export default App;
