import Image from "next/image";

interface AttractionTag {
  text: string;
  iconPosition?: "left" | "right";
  iconUrl?: string;
}

const AttractionTag: React.FC<AttractionTag> = ({
  text,
  iconPosition = "left",
  iconUrl,
}) => {
  return (
    <>
      <div className="bg-[#4D5652] w-fit px-3 py-1 rounded-2xl flex gap-1">
        {iconUrl && iconPosition == "left" ? (
          <Image alt="icon" src={iconUrl} height={16} width={16} />
        ) : null}

        <p className="text-white text-xs">{text}</p>
        {iconUrl && iconPosition == "right" ? (
          <Image alt="icon" src={iconUrl} height={16} width={16} />
        ) : null}
      </div>
    </>
  );
};

export default AttractionTag;
