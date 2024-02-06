import { IngredientType } from "../../../../api/api-requests";
import Header from "../header-component";
import IngredientEntry from "../ingredient-entry";

interface IngredientsSectionInterface {
  ingredients: IngredientType[];
}

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const IngredientsSection: React.FC<IngredientsSectionInterface> = ({
  ingredients,
}) => {
  return (
    <div className="relative ">
      <div
        className=" bg-gray-100 absolute top-0 right-0 bottom-0 left-0 -z-10 rounded-xl"
        style={{
          backgroundImage:
            "url(/images/groceries.png), url(/images/pattern.jpg)",
          backgroundSize: "60%, cover",
          backgroundPosition: "120% 100%, top",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="flex flex-col gap-1 p-2 rounded-xl">
        <Header text="Ingredients" size="small" />
        <ul className="flex flex-col gap-3">
          {ingredients.map((ingredient) => {
            return (
              <IngredientEntry
                name={capitalizeFirstLetter(ingredient.originalName)}
                amount={ingredient.amount}
                unit={ingredient.unit}
                key={ingredient.id}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default IngredientsSection;
