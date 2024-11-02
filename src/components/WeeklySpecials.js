import Button from "./Button";
import DishList from "./DishList";
import "./css/Special.css";
function WeeklySpecials() {
  return (
    <section className="container special">
      <div className="special-wrapper">
        <div className="flex content-between">
          <h3>This Weeks Specials</h3>
          <Button>Online Order</Button>
        </div>

        <DishList />
      </div>
    </section>
  );
}
export default WeeklySpecials;
