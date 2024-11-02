import Button from "./Button";
import heroImage from "../assets/restauranfood.jpg";
import "./css/Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="flex container hero-wrapper">
        {/* Left */}
        <div className="hero-left">
          <div>
            {" "}
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
          </div>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/bookingpage">
            <Button>Reserve a table</Button>
          </Link>
        </div>
        {/* Right */}
        <div>
          <img
            src={heroImage}
            alt="bread with salad on it"
            style={{ width: "400px" }}
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;
