import { IngredientType } from "../../../../api/api-requests";
import Header from "../header-component";
import IngredientEntry from "../ingredient-entry";

interface IngredientsSectionInterface {
  ingredients: IngredientType[];
}

const IngredientsSection: React.FC<IngredientsSectionInterface> = ({
  ingredients,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <Header text="Ingredients" size="small" />
      <ul className="flex flex-col gap-3">
        {ingredients.map((ingredient) => {
          return (
            <IngredientEntry
              name={ingredient.name}
              amount={ingredient.amount}
              unit={ingredient.unit}
              key={ingredient.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default IngredientsSection;
