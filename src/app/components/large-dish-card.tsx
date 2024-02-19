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
      className="w-full h-52 md:h-64 flex flex-col bg-gray-100 rounded-2xl relative"
    >
      <div
        className="absolute left-0 top-0 right-0 bottom-0 z-10 rounded-2xl"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent, transparent, black)",
        }}
      />
      <Image
        alt="dish image"
        src={image}
        fill={true}
        className="object-cover rounded-2xl"
      />
      <p className="font-montserrat font-semibold p-2 absolute text-white bottom-0 left-0 z-20">
        {title}
      </p>
    </Link>
  );
}
