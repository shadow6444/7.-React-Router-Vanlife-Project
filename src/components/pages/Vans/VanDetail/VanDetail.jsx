import "./VanDetail.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { getVanDetail } from "../../../../api";
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
        const vanDetails = await getVanDetail(params.id);
        setVan(vanDetails);
      } catch (error) {
        setError(error);
      }
      setIsFetching(false);
    }
    fetchData();
  }, []);

  const search = state?.search || "";
  const type = state?.type || "all";

  return (
    <section className="van-detail-container">
      {isFetching ? (
        <h2 className="fetch-api">Fetching van details from API...</h2>
      ) : error ? (
        <h2 className="error-api">{error.message}</h2>
      ) : (
        <>
          <Link to={`..${search}`} relative="path" className="back-link">
            <FaArrowLeft />
            <p>Back to {type} vans</p>
          </Link>
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
        </>
      )}
    </section>
  );
};

export default VanDetail;

{
  /* <Link to={`..${search}`} relative="path" className="back-link">
        <FaArrowLeft />
        <p>Back to {search === "?" ? "all vans" : `${search.slice(6)} vans`}</p>
      </Link> */
}
