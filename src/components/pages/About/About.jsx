import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about-hero-container">
      <div className="about-hero-img">
        <img src="/about-hero.png" alt="about hero img" />
      </div>
      <div className="about-hero-text">
        <div className="about-text">
          <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
        </div>
        <div className="about-info">
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="about-link">
          <h3>Your destination is waiting. Your van is ready.</h3>
          <Link className="about-van-link">Explore our vans</Link>
        </div>
      </div>
    </section>
  );
};

export default About;
