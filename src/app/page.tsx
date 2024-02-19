import SearchBar from "./components/search-bar";
import HomepageTitle from "./components/homepage-title";
import NavBar from "./components/nav-bar";
import PopularSection from "./components/molecules/popular-section";
import CategoriesSection from "./components/molecules/categories-section";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import { getRandomRecipes } from "../../api/api-requests";

const Homepage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["random-recipes"],
    queryFn: () => getRandomRecipes("10"),
    staleTime: 1000 * 60 * 2,
  });

  return (
    <div className="p-5 flex flex-col gap-6">
      <NavBar />
      <HomepageTitle userName="Frederico" />
      <SearchBar placeholder="Search for a dish" />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PopularSection />
      </HydrationBoundary>
      <CategoriesSection />
    </div>
  );
};

export default Homepage;
