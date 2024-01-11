import HomepageTitle from "../homepage-title";
import LocationInput from "../location-input";

interface I {
  locationName: string;
}

const HeadingSection: React.FC<I> = ({ locationName }) => {
  return (
    <div className="flex justify-between items-start">
      <HomepageTitle locationName={locationName} />
      <LocationInput locationName={locationName} />
    </div>
  );
};

export default HeadingSection;
