import useEmblaCarousel from "embla-carousel-react";
import DishCard from "../dish-card";

const exampleDishes = [
  {
    name: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    price: "$15",
    imagePath: "/images/food-bowl.jpg",
    id: "1",
    dishType: "dinner",
    isPopular: false,
  },
  {
    name: "Tacos",
    price: "$12",
    imagePath: "/images/food-bowl.jpg",
    id: "2",
    dishType: "side dish",
    isPopular: true,
  },
  {
    name: "Fried Rice",
    price: "$20",
    imagePath: "/images/food-bowl.jpg",
    id: "3",
    dishType: "dinner",
    isPopular: true,
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
            imagePath={dish.imagePath}
            key={dish.id}
            dishType={dish.dishType}
            isPopular={dish.isPopular}
            id={dish.id}
          />
        ))}
      </div>
    </div>
  );
};

export default DishesCarousel;
