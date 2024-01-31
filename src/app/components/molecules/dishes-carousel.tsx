import useEmblaCarousel from "embla-carousel-react";
import DishCard from "../dish-card";
import { Dish } from "../../../../api/api-requests";

const DishesCarousel = ({ recipes }: any) => {
  const [carousel] = useEmblaCarousel();

  return (
    <div className="embla mr-[-1.25rem]" ref={carousel}>
      <div className="embla__container">
        {recipes?.map((dish: Dish) => (
          <DishCard
            name={dish.title}
            imagePath={dish.image}
            key={dish.id}
            dishType={dish.dishTypes[0]}
            isPopular={dish.veryPopular}
            id={dish.id}
          />
        ))}
      </div>
    </div>
  );
};

export default DishesCarousel;
