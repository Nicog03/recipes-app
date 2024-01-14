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
      className=" bg-black bg-opacity-75 hover:bg-gray-700 transition rounded-full p-2"
    >
      <Image
        className="invert"
        alt="icon image"
        src={imageUrl}
        width={width}
        height={height}
      />
    </button>
  );
};

export default RoundedButton;
