import { Link } from "react-router-dom";
import confetti from "../assets/images/confetti.gif";
function ThankYou() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <img
        src={confetti}
        alt="confetti"
        style={{ margin: "0 auto", width: "400px" }}
      />
      <h1>Success</h1>
      <p>
        Your reservation has been made we look forward seeing you at restaurant.
      </p>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          padding: "10px 25px",
          backgroundColor: "var(--primary-1)",
          display: "block",

          width: "fit-content",
          margin: "0 auto",
          color: "white",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      >
        Go Back to Homepage
      </Link>
    </div>
  );
}
export default ThankYou;
