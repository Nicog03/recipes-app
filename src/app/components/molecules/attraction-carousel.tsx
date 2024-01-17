import useEmblaCarousel from "embla-carousel-react";
import AttractionCard from "../attraction-card";

const examplePlaces = [
  {
    name: "Amsterdam",
    rating: "4.7",
    imagePath: "/images/landscape.jpg",
    id: "1",
  },
  { name: "Delft", rating: "4.5", imagePath: "/images/landscape.jpg", id: "2" },
  {
    name: "Giethoorn",
    rating: "4.6",
    imagePath: "/images/landscape.jpg",
    id: "3",
  },
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
            key={place.id}
          />
        ))}
      </div>
    </div>
  );
};

export default AttractionCarousel;
