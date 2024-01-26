import Image from "next/image";

interface RoundedButtonInterface {
  imageUrl: string;
  height: number;
  width: number;
}

const RoundedButton: React.FC<RoundedButtonInterface> = ({
  imageUrl,
  height,
  width,
}) => {
  return (
    <button
      type="button"
      className=" flex-shrink-0 bg-white  hover:brightness-90 transition rounded-full p-1"
    >
      <Image alt="icon image" src={imageUrl} width={width} height={height} />
    </button>
  );
};

export default RoundedButton;
