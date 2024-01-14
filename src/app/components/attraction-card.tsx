import Image from "next/image";
import AttractionTag from "./attraction-tag";
import Link from "next/link";
import RoundedButton from "./rounded-button";

interface LocationType {
  name: string;
  rating: string;
  imagePath: string;
}

const AttractionCard: React.FC<LocationType> = ({
  name,
  rating,
  imagePath,
}) => {
  return (
    <Link href={"/details"}>
      <div
        className=" flex items-end h-60 w-48 bg-gray-200 rounded-3xl"
        style={{
          backgroundImage: `url(${imagePath})`,
          backgroundSize: "cover",
        }}
      >
        <div className="p-3 flex items-end justify-between w-full">
          <div className="flex flex-col gap-2 ">
            <AttractionTag text={name} />
            <AttractionTag text={rating} iconUrl="/icons/star.svg" />
          </div>
          <RoundedButton
            imageUrl="/icons/heart-lined.svg"
            height={24}
            width={24}
          />
        </div>
      </div>
    </Link>
  );
};

export default AttractionCard;
