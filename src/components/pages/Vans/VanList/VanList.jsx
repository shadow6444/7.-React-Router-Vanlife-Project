import "./VanList.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const VanList = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [vanList, setVanList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const response = await fetch("/api/vans");
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("Failed to Fetch Data!");
        }
        console.log(resData.vans);
        setVanList(resData.vans);
      } catch (error) {
        setError({ message: error.message || "Could not fetch data!" });
      }
      setIsFetching(false);
    }
    fetchData();
  }, []);

  const vanElements = (
    <div className="van-list">
      {vanList.map((van) => {
        let cssClasses = "tag ";

        if (van.type === "simple") {
          cssClasses += "simple";
        } else if (van.type === "luxury") {
          cssClasses += "luxury";
        } else if (van.type === "rugged") {
          cssClasses += "rugged";
        }

        return (
          <Link to={`/vans/${van.id}`} key={van.id}>
            <div className="van">
              <img src={van.imageUrl} alt="van image" />
              <div className="van-info">
                <div className="van-name-price">
                  <h3>{van.name}</h3>
                  <h3>${van.price}</h3>
                </div>
                <p>/day</p>
                <h3 className={cssClasses}>{van.type}</h3>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
  return (
    <section className="van-list-container">
      <div className="van-list-header">
        <h2>Explore our van options</h2>
        <div className="van-list-filters">
          <button className="simple">Simple</button>
          <button className="luxury">Luxury</button>
          <button className="rugged">Rugged</button>
          <button className="clear">Clear filters</button>
        </div>
      </div>
      {isFetching ? (
        <p>Fetching Data From API...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        vanElements
      )}
    </section>
  );
};
export default VanList;
