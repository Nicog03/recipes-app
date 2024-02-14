import Link from "next/link";
import Image from "next/image";

interface CategoryCardInterface {
  categoryName: string;
  imageUrl: string;
  cardColor: string;
  type: string;
}

const CategoryCard: React.FC<CategoryCardInterface> = ({
  categoryName,
  imageUrl,
  cardColor,
  type,
}) => {
  return (
    <Link href={`/explore?type=${type}`}>
      <div
        style={{ backgroundColor: `var(${cardColor})` }}
        className="[&>img]:hover:scale-110 w-40 h-40 rounded-2xl flex flex-col items-center justify-center gap-2 hover:brightness-105 transition"
      >
        <Image
          className="mix-blend-luminosity h-24 w-24 transition"
          alt="category image"
          src={imageUrl}
          width={512}
          height={512}
        ></Image>
        <p className="font-montserrat font-semibold opacity-60">
          {categoryName}
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
