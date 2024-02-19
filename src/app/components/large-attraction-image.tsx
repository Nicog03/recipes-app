import SquaredButton from "./squared-button";
import RoundedButton from "./rounded-button";
import Image from "next/image";

interface LargeAttractionImageInterface {
  imageUrl: string;
}

const LargeAttractionImage: React.FC<LargeAttractionImageInterface> = ({
  imageUrl,
}) => {
  return (
    <div className="relative">
      <div className="absolute left-3 top-3 z-10">
        <SquaredButton imageUrl="/icons/left-caret-icon.svg" />
      </div>
      <div className="h-80 w-full">
        <Image
          src={imageUrl}
          alt="Image of the attraction"
          fill={true}
          className="object-cover rounded-3xl"
        />
      </div>
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
