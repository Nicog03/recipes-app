"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();

  console.log(pathName);

  return (
    // Will be hidden when the screen has a width larger than 768px
    <div className="sm:hidden bg-white w-full flex items-center gap-12 justify-center h-16 fixed bottom-0 left-0 py-6 rounded-t-[2rem] border-2 border-gray-200 z-10">
      <Link
        href={"#"}
        className={
          `${pathName === "/" ? "bg-[--accent] " : ""}` +
          "h-fit rounded-full p-2"
        }
      >
        <Image
          src={"/icons/home-icon.svg"}
          alt="heart icon"
          width={24}
          height={24}
          className={pathName === "/" ? "brightness-200" : ""}
        />
      </Link>
      <Link
        href={"#"}
        className="h-fit rounded-full p-2 hover:bg-gray-100 transition"
      >
        <Image
          src={"/icons/heart-icon.svg"}
          alt="heart icon"
          width={24}
          height={24}
        />
      </Link>
      <Link
        href={"#"}
        className="h-fit rounded-full p-2 hover:bg-gray-100 transition"
      >
        <Image
          src={"/icons/profile-icon.svg"}
          alt="heart icon"
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
};

export default NavBar;
