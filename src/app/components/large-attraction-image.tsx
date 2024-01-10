import SquaredButton from "./squared-button";
import RoundedButton from "./rounded-button";

const LargeAttractionImage = () => {
  return (
    <div className="relative">
      <div className="absolute left-3 top-3">
        <SquaredButton imageUrl="/icons/left-caret-icon.svg" />
      </div>
      <img
        src="/images/landscape.jpg"
        alt="Image of the attraction"
        className="h-80 object-cover rounded-3xl"
      />
      <RoundedButton imageUrl="/icons/heart-lined.svg" />
    </div>
  );
};

export default LargeAttractionImage;
