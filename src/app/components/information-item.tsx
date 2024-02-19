import Image from "next/image";

interface InformationInterface {
  name: string | number;
  iconUrl: string;
}

const InformationItem: React.FC<InformationInterface> = ({ name, iconUrl }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 h-20 sm:h-24 w-20 sm:w-24 rounded-2xl gap-1">
      <Image
        className="opacity-50"
        src={iconUrl}
        alt="information icon"
        height={24}
        width={24}
      ></Image>
      <p className="font-montserrat text-xs sm:text-sm font-semibold text-center text-gray-400 ">
        {name}
      </p>
    </div>
  );
};

export default InformationItem;
