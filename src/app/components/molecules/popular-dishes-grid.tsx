import MediumDishCard from "../medium-dish-card";
import { Dish } from "../../../../api/api-requests";

interface PopularDishesGridInterface {
  recipes: Dish[];
}

const PopularDishesGrid: React.FC<PopularDishesGridInterface> = ({
  recipes,
}) => {
  return (
    <div
      className="grid w-full gap-2   justify-center"
      style={{
        gridTemplate: "repeat(auto-fit, 160px) / repeat(auto-fit, 160px)",
      }}
    >
      {recipes.map((dish) => (
        <MediumDishCard dish={dish} />
      ))}
    </div>
  );
};

export default PopularDishesGrid;
