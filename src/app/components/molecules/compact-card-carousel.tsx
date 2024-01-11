import useEmblaCarousel from "embla-carousel-react";
import CompactAttractionCard from "../compact-attraction-card";

const CompactCardCarousel = () => {
  const [compactCarousel] = useEmblaCarousel();

  return (
    <div className="embla mr-[-1.25rem]" ref={compactCarousel}>
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
  );
};

export default CompactCardCarousel;
