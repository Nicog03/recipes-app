"use client";

import Header from "../header-component";
import CompactCard from "../compact-card";
import { useQuery } from "@tanstack/react-query";
import { getSearchResults } from "../../../../api/api-requests";
import { useSearchParams } from "next/navigation";
import LoadingSearchResultSection from "./loading-search-result-section";

type ResultType = {
  title: string;
  image: string;
  id: number;
};

export default function SearchResults() {
  const searchParams = useSearchParams();

  const search = searchParams.get("term");

  const { data, isFetching } = useQuery({
    queryKey: [`${search}-search-results`],
    queryFn: () => getSearchResults(search!),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10,
  });

  return isFetching ? (
    <LoadingSearchResultSection />
  ) : (
    data && (
      <div
        className="p-5 flex flex-col gap-2 rounded-ss-2xl rounded-se-2xl"
        style={{
          backgroundImage: "url(/images/pattern.jpg)",
          backgroundSize: "cover",
        }}
      >
        <Header size="medium" text={`Results for ${search}`} />
        {data.results.map((result: ResultType) => (
          <CompactCard
            dishTitle={result.title}
            imageUrl={result.image}
            id={result.id}
            key={result.id}
          />
        ))}
      </div>
    )
  );
}
