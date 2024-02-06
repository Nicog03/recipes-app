"use client";

import TextButton from "../text-button";
import Header from "../header-component";
import DishesCarousel from "./dishes-carousel";
import { getRandomRecipes } from "../../../../api/api-requests";
import { useQuery } from "@tanstack/react-query";
import LoadingCard from "../loading-card";

const PopularSection = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["random-recipes"],
    queryFn: () => getRandomRecipes(),
    staleTime: 10 * 1000,
    refetchOnWindowFocus: false,
  });

  return (
    <section className="flex flex-col gap-3">
      <div className="flex justify-between">
        <Header text="Popular Dishes" size="small" />
        <TextButton onClick={() => {}} text="See more" />
      </div>
      {isFetching ? <LoadingCard /> : <DishesCarousel recipes={data.recipes} />}
    </section>
  );
};

export default PopularSection;
