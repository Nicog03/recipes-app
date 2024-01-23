import TextButton from "../text-button";
import Header from "../header-component";
import DishesCarousel from "./dishes-carousel";

const PopularSection = () => {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex justify-between">
        <Header text="Popular Dishes" size="small" />
        <TextButton text="See more" />
      </div>
      <DishesCarousel />
    </section>
  );
};

export default PopularSection;
