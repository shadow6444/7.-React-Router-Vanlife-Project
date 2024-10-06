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
import HostLayout from "./components/Layout/HostLayout";
import HostVans from "./components/pages/Host/HostVans";
import HostVanLayout from "./components/Layout/HostVanLayout";
import HostVanDetail from "./components/pages/Host/HostVans/HostVan/HostVanDetails";
import HostVanPricing from "./components/pages/Host/HostVans/HostVan/HostVanPricing";
import HostVanPhoto from "./components/pages/Host/HostVans/HostVan/HostVanPhoto";

import "./server";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<VanList />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanLayout />}>
              <Route index element={<HostVanDetail />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhoto />} />
            </Route>
            <Route path="reviews" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
