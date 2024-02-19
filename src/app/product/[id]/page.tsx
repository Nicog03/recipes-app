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

const AttractionPage = ({ params }: any) => {
  const id = params.id;

  const { data, isFetching } = useQuery({
    queryKey: ["recipe"],
    queryFn: () => getRecipe(id),
    refetchOnWindowFocus: false,
  });

  return isFetching ? (
    <LoadingDishPage />
  ) : (
    data && (
      <div className="p-5 flex flex-col gap-6 h-screen sm:max-w-3xl sm:mx-auto">
        <LargeAttractionImage imageUrl={data.image} />
        <div className="flex flex-col gap-6 flex-1">
          <DescriptionHeading
            title={data.title}
            credits={data.sourceName}
            sourceUrl={data.sourceUrl}
          />
          <DescriptionParagraph description={data.summary} />
        </div>
        <DishInformation
          dairyFree={data.dairyFree}
          readyInMinutes={data.readyInMinutes}
          servings={data.servings}
          isVegan={data.vegan}
          isVegetarian={data.vegetarian}
          glutenFree={data.glutenFree}
        />
        <IngredientsSection ingredients={data.extendedIngredients} />
        <RecipeSection recipe={data.analyzedInstructions as any} />
      </div>
    )
  );
};

export default AttractionPage;
