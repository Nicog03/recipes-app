import Image from "next/image";
import { Dish } from "../../../api/api-requests";

interface MediumDishCardType {
  dish: Dish;
}

const MediumDishCard: React.FC<MediumDishCardType> = ({ dish }) => {
  return (
    <div className="flex flex-col h-40 w-40 bg-gray-200 rounded-2xl item ">
      <div className="relative w-full h-full">
        <Image
          alt="dish image"
          src={dish.image ? dish.image : "/images/cloche.png"}
          fill={true}
          className={`${
            !dish.image && "scale-75 saturate-0"
          } object-cover rounded-2xl`}
        />
      </div>
      <div className="p-2 flex items-center justify-center">
        <p className="font-montserrat font-semibold text-sm leading-4 ">
          {dish.title}
        </p>
      </div>
    </div>
  );
};

export default MediumDishCard;
