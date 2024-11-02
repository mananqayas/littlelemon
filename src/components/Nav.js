import logo from "../assets/Logo.svg";
import "./css/Header.css";
import hamburger from "../assets/hamburger.svg";
import basket from "../assets/Basket.svg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="container flex content-between">
      {/* logo */}
      <span className="mobile-hamburger flex">
        <img src={hamburger} alt="hambarger" />
      </span>
      <Link to="/">
        <img src={logo} alt="Little Lemon Logo" />{" "}
      </Link>
      <nav role="list" className="main-navigation flex">
        <ul className="flex navigation">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>MENU</li>
          <li>RESERVATIONS</li>
          <li>ORDER ONLINE</li>
          <li>LOGIN</li>
          <span className="flex">
            <img src={basket} alt="Basket" />
          </span>
        </ul>
      </nav>
      <span className="flex basket">
        <img src={basket} alt="Basket" />
      </span>
    </div>
  );
}
export default Nav;
