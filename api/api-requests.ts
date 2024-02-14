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
  glutenFree: boolean;
};

export async function getRandomRecipes(amount: string) {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/random?number=${amount}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
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

export async function getSearchResults(string: string) {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=${string}&number=10&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const recipe = await res.json();
  return recipe;
}

export async function getDishCategory(category: string) {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?${category}&number=10&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const recipe = await res.json();
  return recipe;
}
