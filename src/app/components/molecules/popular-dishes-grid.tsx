import MediumDishCard from "../medium-dish-card";
import { Dish } from "../../../../api/api-requests";

interface PopularDishesGridInterface {
  recipes: Dish[];
}

const PopularDishesGrid: React.FC<PopularDishesGridInterface> = ({
  recipes,
}) => {
  return (
    <div className="inline-flex flex-wrap gap-1 ">
      {recipes.map((dish) => (
        <MediumDishCard dish={dish} />
      ))}
    </div>
  );
};

export default PopularDishesGrid;
