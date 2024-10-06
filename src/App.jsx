import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import MainLayout from "./components/Layout/MainLayout";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import VanList from "./components/pages/Vans/VanList";
import VanDetail from "./components/pages/Vans/VanDetail";
import HostLayout from "./components/Layout/HostLayout";
import HostDashboard from "./components/pages/Host/HostDashboard";
import HostIncome from "./components/pages/Host/HostIncome";
import HostReview from "./components/pages/Host/HostReview";
import HostVans from "./components/pages/Host/HostVans";
import HostVanLayout from "./components/Layout/HostVanLayout";
import HostVanDetail from "./components/pages/Host/HostVans/HostVan/HostVanDetails";
import HostVanPricing from "./components/pages/Host/HostVans/HostVan/HostVanPricing";
import HostVanPhoto from "./components/pages/Host/HostVans/HostVan/HostVanPhoto";
import PageNotFound from "./components/pages/PageNotFound";

import "./server";
import AuthRequired from "./components/Layout/AuthRequired/AuthRequired";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<VanList />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<HostDashboard />} />
              <Route path="income" element={<HostIncome />} />
              <Route path="reviews" element={<HostReview />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanLayout />}>
                <Route index element={<HostVanDetail />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhoto />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
