import Link from "next/link";
import Image from "next/image";

type CompactCardProps = {
  imageUrl: string;
  dishTitle: string;
  id: number;
};

export default function CompactCard({
  imageUrl,
  dishTitle,
  id,
}: CompactCardProps) {
  return (
    <Link
      href={`/product/${id}`}
      className="flex gap-3 items-start bg-white p-2 rounded-2xl h-fit"
    >
      <div className="h-20 w-20 relative flex-shrink-0 ">
        <Image
          alt="dish image"
          src={imageUrl}
          fill={true}
          className="rounded-lg h-12 w-12 object-cover border-2  border-gray-200"
        />
      </div>
      <p className="font-montserrat font-semibold text-sm text-gray-700">
        {dishTitle}
      </p>
    </Link>
  );
}
