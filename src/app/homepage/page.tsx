"use client";

import SearchBar from "../components/search-bar";
import Tag from "../components/tag";
import AttractionCard from "../components/attraction-card";
import Link from "next/link";
import CompactAttractionCard from "../components/compact-attraction-card";
import useEmblaCarousel from "embla-carousel-react";
import LocationInput from "../components/location-input";
import HomepageTitle from "../components/homepage-title";
import NavBar from "../components/nav-bar";

const Homepage = () => {
  const [tagsCarousel] = useEmblaCarousel();
  const [cardsCarousel] = useEmblaCarousel();
  const [compactCardsCarousel] = useEmblaCarousel();

  const locationName = "Netherlands";

  return (
    <>
      <NavBar />
      <div className="p-5 flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <HomepageTitle locationName={locationName} />
          <LocationInput locationName={locationName} />
        </div>
        <SearchBar placeholder="Find things to do"></SearchBar>
        <div className="embla mr-[-1.25rem]" ref={tagsCarousel}>
          <div className="embla__container">
            <Tag text="Location" href="#" selected />
            <Tag text="Hotels" href="#" />
            <Tag text="Food" href="#" />
            <Tag text="Adventure" href="#" />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <section className="flex flex-col gap-3">
            <div className="flex justify-between">
              <h1 className="font-semibold text-lg">Popular</h1>
              <Link href={""}>See All</Link>
            </div>
            <div className="embla mr-[-1.25rem]" ref={cardsCarousel}>
              <div className="embla__container">
                <AttractionCard />
                <AttractionCard />
                <AttractionCard />
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-4">
            <h1 className="font-semibold text-lg">Recommended</h1>
            <div className="embla mr-[-1.25rem]" ref={compactCardsCarousel}>
              <div className="embla__container">
                <CompactAttractionCard
                  country="Netherlands"
                  title="Explore Amsterdam"
                  subtitle="Hot Deal"
                />
                <CompactAttractionCard
                  country="Netherlands"
                  title="Explore Amsterdam"
                  subtitle="Hot Deal"
                />
                <CompactAttractionCard
                  country="Netherlands"
                  title="Explore Amsterdam"
                  subtitle="Hot Deal"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Homepage;
