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
      <span className="absolute right-3 -bottom-5 ">
        <RoundedButton
          imageUrl="/icons/heart-lined.svg"
          height={32}
          width={32}
        />
      </span>
    </div>
  );
};

export default LargeAttractionImage;

// "absolute h-11 w-11  bg-gray-200 hover:bg-gray-300 transition rounded-full p-2";
