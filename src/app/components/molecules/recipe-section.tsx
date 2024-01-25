import Header from "../header-component";

interface RecipeSectionInterface {
  recipe: string;
}

const RecipeSection: React.FC<RecipeSectionInterface> = ({ recipe }) => {
  return (
    <section>
      <Header text="Recipe" size="small" />
      <p>{recipe}</p>
    </section>
  );
};

export default RecipeSection;
