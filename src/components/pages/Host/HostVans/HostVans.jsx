import { Link } from "react-router-dom";
import "./HostVans.css";
import { useEffect, useState } from "react";
const HostVans = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const response = await fetch("/api/host/vans");
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("Failed to Fetch Data!");
        }
        setHostVans(resData.vans);
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
          <li key={hostVan.id}>
            <Link to={hostVan.id}>
              <div className="host-van">
                <img src={hostVan.imageUrl} alt="van image" />
                <div className="host-van-info">
                  <h3>{hostVan.name}</h3>
                  <p>${hostVan.price}/day</p>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <section className="host-vans-container">
        <h1>Your listed vans</h1>
        {isFetching ? (
          <p>Fetching Data From API...</p>
        ) : error ? (
          <p>{error.message}</p>
        ) : (
          hostVanElements
        )}
      </section>
    </>
  );
};

export default HostVans;
