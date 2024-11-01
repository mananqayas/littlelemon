import Button from "./Button";
import scotter from "../assets/moped.svg";
const SingleDish = ({ img, title, description, price }) => {
  return (
    <li>
      <div>
        <img src={img} alt={title} style={{ width: "400px" }} />
      </div>
      <div>
        <div>
          <h5>{title}</h5>
          <span>${price}</span>
        </div>
        <p>{description}</p>
        <div>
          <Button>Order a delivery</Button>
          <span>
            <img src={scotter} alt="scotter" />
          </span>
        </div>
      </div>
    </li>
  );
};
export default SingleDish;
