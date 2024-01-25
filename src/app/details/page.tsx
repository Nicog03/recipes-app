import LargeAttractionImage from "../components/large-attraction-image";
import DescriptionParagraph from "../components/description-paragraph";
import DescriptionHeading from "../components/molecules/description-heading";
import DishInformation from "../components/molecules/dish-information";
import IngredientsSection from "../components/molecules/ingredients-section";
import RecipeSection from "../components/molecules/recipe-section";

const descText =
  "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately 19g of protein...";

const recipeText =
  "Bring a large pot of water to a boil and season generously with salt. Add the pasta to the water once boiling and cook until al dente. Reserve 2 cups of cooking water and drain the pasta.";

const AttractionPage = () => {
  return (
    <div className="p-5 flex flex-col gap-6 h-screen ">
      <LargeAttractionImage />
      <DescriptionHeading
        title="Pasta with Garlic, Scallions, 
Cauliflower & Breadcrumbs"
        credits="Full Belly Sisters"
      />
      <DescriptionParagraph description={descText} />
      <DishInformation />
      <IngredientsSection />
      <RecipeSection recipe={recipeText} />
    </div>
  );
};

export default AttractionPage;
