import "./VanDetail.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
const VanDetail = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [van, setVan] = useState([]);
  const params = useParams();
  const { state } = useLocation();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);

      try {
        const response = await fetch(`/api/vans/${params.id}`);
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("Failed to Fetch Data!");
        }
        setVan(resData.vans);
      } catch (error) {
        setError({ message: error.message || "Could not fetch data!" });
      }
      setIsFetching(false);
    }
    fetchData();
  }, []);

  const search = state?.search || "";
  const type = state?.type || "all";

  return isFetching ? (
    <p>Fetching Data From API...</p>
  ) : error ? (
    <p>{error.message}</p>
  ) : (
    <section className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-link">
        <FaArrowLeft />
        <p>Back to {type} vans</p>
      </Link>

      {/* <Link to={`..${search}`} relative="path" className="back-link">
        <FaArrowLeft />
        <p>Back to {search === "?" ? "all vans" : `${search.slice(6)} vans`}</p>
      </Link> */}

      <div className="van-details">
        <img src={van.imageUrl} alt="van image" />
        <h3 className={van.type}>{van.type}</h3>
        <h1>{van.name}</h1>
        <h2>
          ${van.price}
          <span>/day</span>
        </h2>
        <p>{van.description}</p>
        <Link>Rent this van</Link>
      </div>
    </section>
  );
};

export default VanDetail;
