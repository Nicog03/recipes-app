"use client";

import SearchBar from "../components/search-bar";
import Link from "next/link";
import LocationInput from "../components/location-input";
import HomepageTitle from "../components/homepage-title";
import NavBar from "../components/nav-bar";
import CompactCardCarousel from "../components/molecules/compact-card-carousel";
import TagsCarousel from "../components/tag-carousel";
import PopularSection from "../components/molecules/popular-section";

const Homepage = () => {
  const locationName = "Netherlands";

  return (
    <div className="p-5 flex flex-col gap-6">
      <NavBar />
      <div className="flex justify-between items-start">
        <HomepageTitle locationName={locationName} />
        <LocationInput locationName={locationName} />
      </div>
      <SearchBar placeholder="Find things to do"></SearchBar>
      <TagsCarousel />
      <PopularSection />
      <div className="flex flex-col gap-8">
        <section className="flex flex-col gap-4">
          <h1 className="font-montserrat font-semibold text-lg">Recommended</h1>
          <CompactCardCarousel />
        </section>
      </div>
    </div>
  );
};

export default Homepage;
