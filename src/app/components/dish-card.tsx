import Link from "next/link";
import RoundedButton from "./rounded-button";
import { capitalizeFirstLetter } from "./molecules/ingredients-section";

interface LocationType {
  name: string;
  imagePath: string;
  dishType: string;
  isPopular: boolean;
  id: number;
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
        className=" flex items-end h-60 w-48 md:h-[18rem] md:w-[15rem] bg-gray-200 rounded-3xl select-none active:scale-95 transition"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent, transparent, black), url(${
            imagePath ? imagePath : "/images/cloche.png"
          })`,
          backgroundSize: "cover",
          backgroundBlendMode: `${!imagePath ? "luminosity" : ""}`,
        }}
      >
        <div className="font-montserrat flex flex-col justify-between p-3 h-full w-full">
          <div className="flex justify-between w-full text-sm">
            {dishType && (
              <p className="font-semibold text-xs text-black bg-white px-2 py-1 rounded-full">
                {capitalizeFirstLetter(dishType)}
              </p>
            )}
            {isPopular && (
              <p className="bg-[--yellow-accent] text-xs rounded-full py-1 px-2 text-black font-semibold">
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
