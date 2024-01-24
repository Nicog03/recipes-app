"use client";

import SearchBar from "../components/search-bar";
import HomepageTitle from "../components/homepage-title";
import NavBar from "../components/nav-bar";
import PopularSection from "../components/molecules/popular-section";
import CategoriesSection from "../components/molecules/categories-section";

const Homepage = () => {
  const locationName = "Netherlands";

  return (
    <div className="p-5 flex flex-col gap-6">
      <NavBar />
      <HomepageTitle userName="Frederico" />
      <SearchBar placeholder="Find things to do" />
      <PopularSection />
      <CategoriesSection />
    </div>
  );
};

export default Homepage;
