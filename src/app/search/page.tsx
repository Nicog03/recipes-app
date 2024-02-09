"use client";

import { useQuery } from "@tanstack/react-query";
import { getSearchResults } from "../../../api/api-requests";
import CompactCard from "../components/compact-card";
import Header from "../components/header-component";
import SearchBar from "../components/search-bar";
import SquaredButton from "../components/squared-button";
import { useSearchParams } from "next/navigation";

type ResultType = {
  title: string;
  image: string;
  id: number;
};

export default function SearchPage() {
  const searchParams = useSearchParams();

  const search = searchParams.get("term");

  const { data } = useQuery({
    queryKey: ["search-results"],
    queryFn: () => getSearchResults(search!),
    // staleTime: 1000 * 60 * 10,
  });

  return (
    data && (
      <div className="ps-5 pe-5 pt-5 flex flex-col gap-2">
        <div className="flex gap-2 bg-slate-100 p-2 rounded-xl items-center">
          <SquaredButton imageUrl="/icons/left-caret-icon.svg" />
          <Header size="large" text="Search" />
        </div>
        <SearchBar placeholder="Search for dishes" />
        <div
          className="p-5 flex flex-col gap-2 rounded-ss-2xl rounded-se-2xl"
          style={{
            backgroundImage: "url(/images/pattern.jpg)",
            backgroundSize: "cover",
          }}
        >
          <Header size="medium" text="Results for Beans" />
          {data.results.map((result: ResultType) => (
            <CompactCard
              dishTitle={result.title}
              imageUrl={result.image}
              id={result.id}
            />
          ))}
        </div>
      </div>
    )
  );
}
