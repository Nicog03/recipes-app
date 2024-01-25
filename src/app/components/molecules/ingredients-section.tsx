import Header from "../header-component";
import IngredientEntry from "../ingredient-entry";

const ingredients = [
  {
    name: "Butter",
    amount: "1 tbsp",
  },
  {
    name: "Cauliflower",
    amount: "2 cups",
  },
  {
    name: "Cheese",
    amount: "2 tbsp",
  },
  {
    name: "Extra virgin olive oil",
    amount: "1-2 tbsp",
  },
  {
    name: "Garlic",
    amount: "5-6 cloves",
  },
  {
    name: "Pasta",
    amount: "6-8 ounces",
  },
  {
    name: "Red pepper flakes",
    amount: "",
  },
  {
    name: "Salt and pepper",
    amount: "to taste",
  },
  {
    name: "Scallions",
    amount: "3 scallions",
  },
];

const IngredientsSection = () => {
  return (
    <div className="flex flex-col gap-1">
      <Header text="Ingredients" size="small" />
      <ul className="flex flex-col gap-3">
        {ingredients.map((ingredient) => {
          return (
            <IngredientEntry
              name={ingredient.name}
              amount={ingredient.amount}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default IngredientsSection;
