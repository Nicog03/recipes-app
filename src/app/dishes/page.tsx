"use client";

import PopularDishesGrid from "../components/molecules/popular-dishes-grid";
import Header from "../components/header-component";
import SquaredButton from "../components/squared-button";
import { useQuery } from "@tanstack/react-query";
import { getRandomRecipes } from "../../../api/api-requests";

export default function DishesPage() {
  const { data } = useQuery({
    queryKey: ["popular-recipes"],
    queryFn: () => getRandomRecipes("10"),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });

  return (
    data && (
      <div className="flex flex-col gap-2 items-center p-5">
        <div className="flex gap-2 bg-slate-100 p-2 rounded-xl items-center w-full ">
          <SquaredButton imageUrl="/icons/left-caret-icon.svg" />
          <Header size="large" text="Popular Dishes" />
        </div>
        <PopularDishesGrid recipes={data.recipes} />
      </div>
    )
  );
}