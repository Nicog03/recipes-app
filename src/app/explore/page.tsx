"use client";

import SquaredButton from "../components/squared-button";
import Header from "../components/header-component";
import LargeDishCard from "../components/large-dish-card";
import { useQuery } from "@tanstack/react-query";
import { Dish, getDishCategory } from "../../../api/api-requests";
import { useSearchParams } from "next/navigation";
import { capitalizeFirstLetter } from "../components/molecules/ingredients-section";
import LoadingLargeDishCard from "../components/loading-large-dish-card";

export default function ExplorePage() {
  const searchParams = useSearchParams();

  const type = searchParams.get("type");

  const { data } = useQuery({
    queryKey: [`${type}-dishes`],
    queryFn: () => getDishCategory(`type=${type?.replace("-", " ")}`),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="flex flex-col gap-2 items-center p-5">
      <div className="flex gap-2 bg-slate-100 p-2 rounded-xl items-center w-full ">
        <SquaredButton imageUrl="/icons/left-caret-icon.svg" />
        <Header
          size="medium"
          text={`Explore ${capitalizeFirstLetter(type!.replace("-", " "))}`}
        />
      </div>
      {data ? (
        data.results.map((dish: Dish) => (
          <LargeDishCard
            key={dish.id}
            id={dish.id}
            image={dish.image}
            title={dish.title}
          />
        ))
      ) : (
        <LoadingLargeDishCard />
      )}
    </div>
  );
}
