import Button from "./Button";
import DishList from "./DishList";

function WeeklySpecials() {
  return (
    <section>
      <div>
        <div>
          <h1>This Weeks Specials</h1>
          <Button>Online Order</Button>
        </div>

        <DishList />
      </div>
    </section>
  );
}
export default WeeklySpecials;
