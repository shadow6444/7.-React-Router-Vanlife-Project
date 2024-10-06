import "./HostDashboard.css";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { getHostVans } from "../../../../api";

const HostDashboard = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const vans = await getHostVans();
        setHostVans(vans);
      } catch (error) {
        setError({ message: error.message || "Could not fetch data!" });
      }
      setIsFetching(false);
    }
    fetchData();
  }, []);

  const hostVanElements = (
    <ul className="host-vans-list">
      {hostVans.map((hostVan) => {
        return (
          <li key={hostVan.id} className="dashboard-van-list">
            <div className="host-van">
              <img src={hostVan.imageUrl} alt="van image" />
              <div className="host-van-info">
                <h3>{hostVan.name}</h3>
                <p>${hostVan.price}/day</p>
              </div>
            </div>
            <Link to={`vans/${hostVan.id}`} className="dashboard-link">
              View
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <section className="host-van-dashboard-container">
        <div className="host-van-dashboard-income">
          <div className="dashboard-income">
            <h2>Welcome!</h2>
            <p>
              Income last <span>30 days</span>
            </p>
            <h1>$2,260</h1>
          </div>
          <div className="link">
            <Link to="income" className="dashboard-link">
              Details
            </Link>
          </div>
        </div>

        <div className="host-van-dashboard-review">
          <div className="dashboard-review">
            <h2>Review score</h2>
            <BsStarFill className="star-icon" />
            <h3>
              5.0<span>/5</span>
            </h3>
          </div>
          <div className="link">
            <Link to="reviews" className="dashboard-link">
              Details
            </Link>
          </div>
        </div>

        <div className="host-van-dashboard-vans">
          <div className="dashboard-vans-header">
            <h2>Your listed vans</h2>
            <Link to="vans" className="dashboard-link">
              View all
            </Link>
          </div>
          {isFetching ? (
            <h2 className="fetch-api">Fetching host vans from API...</h2>
          ) : error ? (
            <h2 className="error-api">{error.message}</h2>
          ) : (
            hostVanElements
          )}
        </div>
      </section>
    </>
  );
};

export default HostDashboard;
