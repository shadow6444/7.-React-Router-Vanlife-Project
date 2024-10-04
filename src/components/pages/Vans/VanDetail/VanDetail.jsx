import "./VanDetail.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
const VanDetail = () => {
  const [error, setError] = useState();
  const [van, setVan] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/vans/${params.id}`);
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("Failed to Fetch Data!");
        }
        console.log(resData.vans);
        setVan(resData.vans);
      } catch (error) {
        setError({ message: error.message || "Could not fetch data!" });
      }
    }
    fetchData();
  }, []);

  return van ? (
    <section className="van-detail-container">
      <Link to="/vans" className="back-link">
        <FaArrowLeft />
        <p>Back to all vans</p>
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
    </section>
  ) : (
    <h1>Loading Van Details...</h1>
  );
};

export default VanDetail;
