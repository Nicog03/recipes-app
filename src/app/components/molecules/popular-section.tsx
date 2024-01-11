import Link from "next/link";
import AttractionCarousel from "./attraction-carousel";
import TextButton from "../text-button";

const PopularSection = () => {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex justify-between">
        <h1 className="font-montserrat font-semibold text-lg">Popular</h1>
        <TextButton text="See all" />
      </div>
      <AttractionCarousel />
    </section>
  );
};

export default PopularSection;
