"use client";

import TextButton from "../text-button";
import Header from "../header-component";
import DishesCarousel from "./dishes-carousel";
import { getRandomRecipes } from "../../../../api/api-requests";
import { useQuery } from "@tanstack/react-query";
import DishCard from "../dish-card";
import LoadingCard from "../loading-card";
import { Island_Moments } from "next/font/google";

const PopularSection = () => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["random-recipes"],
    queryFn: () => getRandomRecipes(),
    // staleTime: 10 * 1000,
    //implement this <---
    refetchOnWindowFocus: false,
    //--->
  });

  if (isLoading) console.log("isLoading");
  if (isFetching) console.log("isFetching");

  return (
    <section className="flex flex-col gap-3">
      <div className="flex justify-between">
        <Header text="Popular Dishes" size="small" />
        <TextButton text="See more" />
      </div>
      {isFetching ? <LoadingCard /> : <DishesCarousel recipes={data.recipes} />}
    </section>
  );
};

export default PopularSection;
