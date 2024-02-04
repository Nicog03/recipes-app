"use client";

import LargeAttractionImage from "../../components/large-attraction-image";
import DescriptionParagraph from "../../components/description-paragraph";
import DescriptionHeading from "../../components/molecules/description-heading";
import DishInformation from "../../components/molecules/dish-information";
import IngredientsSection from "../../components/molecules/ingredients-section";
import RecipeSection from "../../components/molecules/recipe-section";
import { useQuery } from "@tanstack/react-query";
import { getRecipe } from "../../../../api/api-requests";
import LoadingDishPage from "@/app/components/loading-dish-page";
import { InstructionType } from "../../../../api/api-requests";

const descText =
  "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately 19g of protein...";

const recipeText =
  "Bring a large pot of water to a boil and season generously with salt. Add the pasta to the water once boiling and cook until al dente. Reserve 2 cups of cooking water and drain the pasta.";

const AttractionPage = ({ params }: any) => {
  const id = params.id;

  const { data, isFetching } = useQuery({
    queryKey: ["random-recipes"],
    queryFn: () => getRecipe(id),
    refetchOnWindowFocus: false,
  });

  return isFetching ? (
    <LoadingDishPage />
  ) : (
    data && (
      <div className="p-5 flex flex-col gap-6 h-screen ">
        <LargeAttractionImage imageUrl={data.image} />
        <DescriptionHeading
          title={data.title}
          credits={data.sourceName}
          sourceUrl={data.sourceUrl}
        />
        <DescriptionParagraph description={data.summary} />
        <DishInformation />
        <IngredientsSection ingredients={data.extendedIngredients} />
        <RecipeSection recipe={data.analyzedInstructions} />
      </div>
    )
  );
};

export default AttractionPage;
