import Tag from "./tag";
import useEmblaCarousel from "embla-carousel-react";

const TagsCarousel = () => {
  const [carousel] = useEmblaCarousel();

  return (
    <div className="embla mr-[-1.25rem]" ref={carousel}>
      <div className="embla__container">
        <Tag text="Location" href="#" selected />
        <Tag text="Hotels" href="#" />
        <Tag text="Food" href="#" />
        <Tag text="Adventure" href="#" />
      </div>
    </div>
  );
};

export default TagsCarousel;
