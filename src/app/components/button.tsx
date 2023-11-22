import Image from "next/image";

interface Button {
  text: string;
  iconPath?: string;
}

const Button: React.FC<Button> = ({ text, iconPath }) => {
  return (
    <>
      <button className="flex gap-3 items bg-blue-600 text-white font-bold w-full justify-center py-4 rounded-2xl">
        <p>{text}</p>
        {iconPath ? (
          <Image
            src={iconPath}
            alt="icon"
            width={24}
            height={24}
            className="invert"
          ></Image>
        ) : null}
      </button>
    </>
  );
};

export default Button;
