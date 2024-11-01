import SingleDish from "./SingleDish";
import salad from "../assets/images/greek-salad.jpg";
import bruchetta from "../assets/images/bruchetta.svg";
import lemon from "../assets/images/lemon-dessert.jpg";
const dishes = [
  {
    img: salad,
    title: "Greek Salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: 12.99,
  },
  {
    img: bruchetta,
    title: "Bruchetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: 5.99,
  },
  {
    img: lemon,
    title: "Lemon Dessert",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: 5.0,
  },
];
function DishList() {
  return (
    <ul>
      {dishes.map((dish) => (
        <SingleDish
          img={dish.img}
          title={dish.title}
          description={dish.description}
          price={dish.price}
        />
      ))}
    </ul>
  );
}
export default DishList;
