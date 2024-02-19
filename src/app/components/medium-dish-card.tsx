import Image from "next/image";
import { Dish } from "../../../api/api-requests";
import Link from "next/link";

interface MediumDishCardType {
  dish: Dish;
}

const MediumDishCard: React.FC<MediumDishCardType> = ({ dish }) => {
  return (
    <Link
      href={`/product/${dish.id}`}
      className="flex flex-col h-40 md:h-52 w-40 md:w-52 bg-gray-200 rounded-2xl hover:brightness-95 transition"
    >
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
    </Link>
  );
};

export default MediumDishCard;
