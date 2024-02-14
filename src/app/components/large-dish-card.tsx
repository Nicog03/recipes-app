import Image from "next/image";
import Link from "next/link";

interface LargeDishCardInterface {
  image: string;
  title: string;
  id: number;
}

export default function LargeDishCard({
  image,
  title,
  id,
}: LargeDishCardInterface) {
  return (
    <Link
      href={`/product/${id}`}
      className="w-full h-52 flex flex-col bg-gray-100 rounded-2xl"
    >
      <div className="relative w-full h-full">
        <Image
          alt="dish image"
          src={image}
          fill={true}
          className="object-cover rounded-2xl"
        />
      </div>
      <p className="font-montserrat font-semibold p-2">{title}</p>
    </Link>
  );
}
