import useEmblaCarousel from "embla-carousel-react";
import DishCard from "../dish-card";

const exampleDishes = [
  {
    name: "Pasta",
    price: "$15",
    imagePath: "/images/food-bowl.jpg",
    id: "1",
  },
  { name: "Tacos", price: "$12", imagePath: "/images/food-bowl.jpg", id: "2" },
  {
    name: "Fried Rice",
    price: "$20",
    imagePath: "/images/food-bowl.jpg",
    id: "3",
  },
];

const DishesCarousel = () => {
  const [carousel] = useEmblaCarousel();

  return (
    <div className="embla mr-[-1.25rem]" ref={carousel}>
      <div className="embla__container">
        {exampleDishes.map((dish) => (
          <DishCard
            name={dish.name}
            rating={dish.price}
            imagePath={dish.imagePath}
            key={dish.id}
          />
        ))}
      </div>
    </div>
  );
};

export default DishesCarousel;
