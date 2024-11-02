import Button from "./Button";
import scotter from "../assets/moped.svg";
import "./css/SingleDish.css";
const SingleDish = ({ img, title, description, price }) => {
  return (
    <li className="dish-item">
      <div className="dish-single-img">
        <img src={img} alt={title} />
      </div>
      <div className="single-dish-wrapper">
        <div className="flex content-between">
          <h5 className="item-title">{title}</h5>
          <span className="item-price">${price}</span>
        </div>
        <p>{description}</p>
        <div className="flex btn-delivery">
          <Button type="secondary">Order a delivery</Button>
          <span>
            <img src={scotter} alt="scotter" />
          </span>
        </div>
      </div>
    </li>
  );
};
export default SingleDish;
