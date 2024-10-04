import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home-container">
      <div className="home-hero-img">
        <div className="home-hero-header">
          <h1 className="home-hero-text">
            You got the travel plans, we got the travel vans.
          </h1>
          <div className="home-hero-info">
            <p>
              Add adventure to your life by joining the #vanlife movement. Rent
              the perfect van to make your perfect road trip.
            </p>
            <Link className="home-link-button" to="/vans">
              Find your van
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
