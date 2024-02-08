import Link from "next/link";
import Image from "next/image";

type CompactCardProps = {
  imageUrl: string;
  dishTitle: string;
};

export default function CompactCard({ imageUrl, dishTitle }: CompactCardProps) {
  return (
    <Link
      href={"#"}
      className="flex gap-3 items-center bg-white p-2 rounded-2xl h-16"
    >
      <div className="h-12 w-12 relative flex-shrink-0">
        <Image
          alt="dish image"
          src={imageUrl}
          fill={true}
          className="rounded-lg h-12 w-12 object-cover"
        />
      </div>
      <p className="font-semibold">{dishTitle}</p>
    </Link>
  );
}
