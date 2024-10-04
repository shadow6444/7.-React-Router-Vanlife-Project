import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import VanList from "./components/pages/Vans/VanList";
import VanDetail from "./components/pages/Vans/VanDetail";
import Dashboard from "./components/pages/Host/Dashboard";
import Income from "./components/pages/Host/Income";
import Review from "./components/pages/Host/Review";

import "./server";
import HostLayout from "./components/Layout/HostLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<VanList />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route element={<HostLayout />}>
            <Route path="/host" element={<Dashboard />} />
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/reviews" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
