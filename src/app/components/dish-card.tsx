import Link from "next/link";
import RoundedButton from "./rounded-button";

interface LocationType {
  name: string;
  imagePath: string;
  dishType: string;
  isPopular: boolean;
  id: string;
}

const DishCard: React.FC<LocationType> = ({
  name,
  imagePath,
  dishType,
  isPopular,
  id,
}) => {
  return (
    <Link href={`/product/${id}`}>
      <div
        className=" flex items-end h-60 w-48 bg-gray-200 rounded-3xl"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent, transparent, black), url(${imagePath})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-between p-3 h-full w-full">
          <div className="flex justify-between w-full text-sm">
            {dishType && <p className="text-white">{dishType}</p>}
            {isPopular && (
              <p className="bg-[--yellow-accent] rounded-full p-1 text-white font-semibold">
                Popular
              </p>
            )}
          </div>
          <div className=" flex gap-1 items-end justify-between w-full">
            <p className="text-white font-montserrat font-semibold leading-5">
              {name}
            </p>
            <RoundedButton
              imageUrl="/icons/heart-lined.svg"
              height={24}
              width={24}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DishCard;
