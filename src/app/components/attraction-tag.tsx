import Image from "next/image";

interface AttractionTag {
  text: string;
  iconPosition?: "left" | "right";
  iconUrl?: string;
  backgroundColor?: string;
  textColor?: string;
}

const AttractionTag: React.FC<AttractionTag> = ({
  text,
  iconPosition = "left",
  iconUrl,
  backgroundColor = "white",
  textColor = "black",
}) => {
  return (
    <>
      <div
        style={{ backgroundColor: `var(${backgroundColor})` }}
        className="bg-white  w-fit px-3 py-1 rounded-2xl flex gap-1"
      >
        {iconUrl && iconPosition == "left" ? (
          <Image alt="icon" src={iconUrl} height={16} width={16} />
        ) : null}

        <p
          style={{ color: `var(${textColor})` }}
          className="font-montserrat font-semibold text-[--black] text-xs"
        >
          {text}
        </p>
        {iconUrl && iconPosition == "right" ? (
          <Image alt="icon" src={iconUrl} height={16} width={16} />
        ) : null}
      </div>
    </>
  );
};

export default AttractionTag;
