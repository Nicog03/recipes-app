"use client";

import SearchBar from "../components/search-bar";
import NavBar from "../components/nav-bar";
import TagsCarousel from "../components/tag-carousel";
import PopularSection from "../components/molecules/popular-section";
import RecommendedSection from "../components/molecules/recommended-section";
import HeadingSection from "../components/molecules/heading-section";

const Homepage = () => {
  const locationName = "Netherlands";

  return (
    <div className="p-5 flex flex-col gap-6">
      <HeadingSection locationName={locationName} />
      <SearchBar placeholder="Find things to do" />
      <TagsCarousel />
      <PopularSection />
      <RecommendedSection />
      <NavBar />
    </div>
  );
};

export default Homepage;
