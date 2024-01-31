export type Dish = {
  title: string;
  image: string;
  veryPopular: boolean;
  dishTypes: string[];
  id: number;
};

export async function getRandomRecipes() {
  const URL = `https://api.spoonacular.com/recipes/random?number=5&apiKey=${process.env.SPOONACULAR_API_KEY} `;

  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = await fetch(URL);
  const recipes = await res.json();
  return recipes;
}
