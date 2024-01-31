"use client";

import TextButton from "../text-button";
import Header from "../header-component";
import DishesCarousel from "./dishes-carousel";
import { getRandomRecipes } from "../../../../api/api-requests";
import { useQuery } from "@tanstack/react-query";

const PopularSection = () => {
  const { data } = useQuery({
    queryKey: ["random-recipes"],
    queryFn: () => getRandomRecipes(),
    staleTime: 10 * 1000,
  });

  return (
    <section className="flex flex-col gap-3">
      <div className="flex justify-between">
        <Header text="Popular Dishes" size="small" />
        <TextButton text="See more" />
      </div>
      <DishesCarousel recipes={data.recipes} />
    </section>
  );
};

export default PopularSection;
