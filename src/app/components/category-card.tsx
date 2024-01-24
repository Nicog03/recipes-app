import Link from "next/link";
import Image from "next/image";

interface CategoryCardInterface {
  categoryName: string;
  imageUrl: string;
  cardColor: string;
}

const CategoryCard: React.FC<CategoryCardInterface> = ({
  categoryName,
  imageUrl,
  cardColor,
}) => {
  return (
    <Link href={"#"}>
      <div
        style={{ backgroundColor: `var(${cardColor})` }}
        className=" w-40 h-40 rounded-2xl flex flex-col items-center justify-center gap-2 hover:brightness-105 transition"
      >
        <Image
          className="mix-blend-luminosity h-24 w-24"
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
