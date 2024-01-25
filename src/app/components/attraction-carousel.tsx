import useEmblaCarousel from "embla-carousel-react";
import AttractionCard from "./dish-card";

const examplePlaces = [
  { name: "Amsterdam", rating: "4.7", imagePath: "/images/landscape.jpg" },
  { name: "Delft", rating: "4.5", imagePath: "/images/landscape.jpg" },
  { name: "Giethoorn", rating: "4.6", imagePath: "/images/landscape.jpg" },
];

interface CarouselTypes {
  name: string;
  rating: string;
  imagePath: string;
}

const AttractionCarousel = ({}) => {
  const [carousel] = useEmblaCarousel();

  return (
    <div className="embla mr-[-1.25rem]" ref={carousel}>
      <div className="embla__container">
        {examplePlaces.map((place) => (
          <AttractionCard
            name={place.name}
            rating={place.rating}
            imagePath={place.imagePath}
          />
        ))}
      </div>
    </div>
  );
};

export default AttractionCarousel;
