import { API_KEY } from "../config";

export type Dish = {
  title: string;
  image: string;
  veryPopular: boolean;
  dishTypes: string[];
  id: number;
};

export async function getRandomRecipes() {
  console.log(
    `https://api.spoonacular.com/recipes/random?number=5&apiKey=${API_KEY}`
  );
  const URL = `https://api.spoonacular.com/recipes/random?number=5&apiKey=${API_KEY}`;

  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = await fetch(URL);
  const recipes = await res.json();
  return recipes;
}

export async function getRecipe(id: number) {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
  );
  const recipe = (await res.json()) as Dish;
  return recipe;
}
