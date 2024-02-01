import Header from "../header-component";

interface RecipeSectionInterface {
  recipe: string;
}

const RecipeSection: React.FC<RecipeSectionInterface> = ({ recipe }) => {
  return (
    <section>
      <Header text="Recipe" size="small" />
      <p>
        <div dangerouslySetInnerHTML={{ __html: recipe }}></div>
      </p>
    </section>
  );
};

export default RecipeSection;
