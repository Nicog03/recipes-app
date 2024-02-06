export type IngredientType = {
  id: number;
  name: string;
  amount: number;
  unit: string;
  originalName: string;
};

export type InstructionType = {
  step: string;
  number: number;
};

export type Dish = {
  title: string;
  image: string;
  veryPopular: boolean;
  dishTypes: string[];
  id: number;
  sourceName: string;
  sourceUrl: string;
  summary: string;
  instructions: string;
  extendedIngredients: IngredientType[];
  analyzedInstructions: [];
  readyInMinutes: number;
  servings: number;
  dairyFree: boolean;
  vegetarian: boolean;
  vegan: boolean;
};

export async function getRandomRecipes() {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/random?number=5&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const recipes = await res.json();
  return recipes;
}

export async function getRecipe(id: number) {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const recipe = (await res.json()) as Dish;
  return recipe;
}
