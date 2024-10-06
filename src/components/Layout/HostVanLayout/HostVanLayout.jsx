import "./HostVanLayout.css";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";

const HostVanLayout = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [hostVan, setHostVan] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);

      try {
        const response = await fetch(`/api/host/vans/${id}`);
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("Failed to Fetch Data!");
        }
        setHostVan(resData.vans);
      } catch (error) {
        setError({ message: error.message || "Could not fetch data!" });
      }
      setIsFetching(false);
    }
    fetchData();
  }, []);

  return (
    <section className="host-van-info-container">
      <Link relative="path" to=".." className="back-link">
        <FaArrowLeft />
        <p>Back to all vans</p>
      </Link>
      {isFetching ? (
        <h2 className="fetch-api">Fetching host van from API...</h2>
      ) : error ? (
        <h2 className="error-api">{error.message}</h2>
      ) : (
        <div className="host-van-info-section">
          <div className="host-van-data">
            <img src={hostVan.imageUrl} alt="van image" />
            <div className="host-van-text-data">
              <h3 className={`${hostVan.type}`}>{hostVan.type}</h3>
              <h1>{hostVan.name}</h1>
              <h2>
                ${hostVan.price}
                <span>/day</span>
              </h2>
            </div>
          </div>
          <div className="host-van-links">
            <NavLink
              to="."
              end
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              Photos
            </NavLink>
          </div>
          <Outlet context={{ hostVan }} />
        </div>
      )}
    </section>
  );
};

export default HostVanLayout;
