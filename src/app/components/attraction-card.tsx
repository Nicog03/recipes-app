import Image from "next/image";
import AttractionTag from "./attraction-tag";

const AttractionCard = () => {
  return (
    <>
      <div
        className=" flex items-end h-60 w-48 bg-gray-200 rounded-3xl"
        style={{
          backgroundImage: `url("/images/landscape.jpg")`,
          backgroundSize: "cover",
        }}
      >
        <div className="p-3 flex items-end justify-between w-full">
          <div className="flex flex-col gap-2 ">
            <AttractionTag text="Alley Pallace" />
            <AttractionTag text="4.1" iconUrl="/icons/star.svg" />
          </div>
          <button className="h-6 w-6 border-[1px] rounded-full flex items-center justify-center">
            <Image
              className="invert"
              alt="heart image"
              src={"/icons/heart-lined.svg"}
              height={16}
              width={16}
            ></Image>
          </button>
        </div>
      </div>
    </>
  );
};

export default AttractionCard;
