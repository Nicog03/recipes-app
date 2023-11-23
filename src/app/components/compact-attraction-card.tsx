import Image from "next/image";

interface CompactCard {
  title: string;
  subtitle?: string;
  country: string;
}

const CompactAttractionCard: React.FC<CompactCard> = ({
  title,
  subtitle,
  country,
}) => {
  return (
    <>
      <div className="bg-white border-2 w-fit p-1 rounded-2xl flex flex-col gap-2">
        <div className="relative">
          <Image
            alt="attraction image"
            src={"/images/landscape.jpg"}
            width={166}
            height={96}
            className="rounded-xl"
          />
          <p className="absolute right-2 bottom-[-10px] bg-green-950 text-white text-xs w-fit px-2 rounded-2xl border-white border-2">
            {country}
          </p>
        </div>
        <div>
          <h2 className="font-montserrat font-semibold text-sm">{title}</h2>
          <div className="flex gap-1">
            <Image src={"/icons/arrow.svg"} alt="arrow" width={9} height={5} />
            <p className="text-xs">{subtitle}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompactAttractionCard;
