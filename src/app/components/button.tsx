import Image from "next/image";
import React from "react";

interface Button {
  text: string;
  iconPath?: string;
}

const Button: React.FC<Button> = ({ text, iconPath }) => {
  return (
    <>
      <button className="flex gap-3 items bg-[--accent] text-white font-bold w-full justify-center py-4 rounded-2xl hover:brightness-110 active:scale-95 transition-all ">
        <p>{text}</p>
        {iconPath ? (
          <Image
            src={iconPath}
            alt="icon"
            width={24}
            height={24}
            className="brightness-0 invert"
          ></Image>
        ) : null}
      </button>
    </>
  );
};

export default Button;
