import "./VanList.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
const VanList = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [vanList, setVanList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  // function handleFilter(event) {
  //   setSearchParams({ type: event.target.innerText.toLowerCase() });
  // }

  function handleClearFilter() {
    setSearchParams("");
  }

  // function genNewSearchParamString(key, value) {
  //   const sp = new URLSearchParams(searchParams)
  //   if (value === null) {
  //     sp.delete(key)
  //   } else {
  //     sp.set(key, value)
  //   }
  //   return `?${sp.toString()}`
  // }

  function handleFilter(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const response = await fetch("/api/vans");
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("Failed to Fetch Data!");
        }
        setVanList(resData.vans);
      } catch (error) {
        setError({ message: error.message || "Could not fetch data!" });
      }
      setIsFetching(false);
    }
    fetchData();
  }, []);

  const filterdEls = typeFilter
    ? vanList.filter((van) => van.type === typeFilter)
    : vanList;

  const vanElements = (
    <div className="van-list">
      {filterdEls.map((van) => {
        let cssClasses = "tag ";

        if (van.type === "simple") {
          cssClasses += "simple";
        } else if (van.type === "luxury") {
          cssClasses += "luxury";
        } else if (van.type === "rugged") {
          cssClasses += "rugged";
        }

        return (
          <Link
            to={van.id}
            key={van.id}
            state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
          >
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

  let cssClasses;

  return (
    <section className="van-list-container">
      <div className="van-list-header">
        <h2>Explore our van options</h2>
        <div className="van-list-filters">
          <button
            onClick={() => handleFilter("type", "simple")}
            className={`simple ${typeFilter === "simple" ? "active" : null}`}
          >
            Simple
          </button>
          <button
            onClick={() => handleFilter("type", "luxury")}
            className={`luxury ${typeFilter === "luxury" ? "active" : null}`}
          >
            Luxury
          </button>
          <button
            onClick={() => handleFilter("type", "rugged")}
            className={`rugged ${typeFilter === "rugged" ? "active" : null}`}
          >
            Rugged
          </button>
          {typeFilter && (
            <button onClick={handleClearFilter} className="clear">
              Clear filters
            </button>
          )}

          {/* <Link to={genNewSearchParamString("type", "jedi")}>Jedi</Link>
          <Link to={genNewSearchParamString("type", "sith")}>Sith</Link>
          <Link to={genNewSearchParamString("type", null)}>Clear</Link> */}

          {/* <button onClick={() => handleFilterChange("type", "jedi")}>Jedi</button>
        <button onClick={() => handleFilterChange("type", "sith")}>Sith</button>
        <button onClick={() => handleFilterChange("type", null)}>Clear</button> */}
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
