import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className=" bg-white w-full flex gap-12 justify-center h-16 fixed bottom-0 left-0 py-6 rounded-t-[2rem] border-2 border-gray-200 z-10">
      <Link href={"#"}>
        <Image
          className="col-gra"
          src={"/icons/home-icon.svg"}
          alt="heart icon"
          width={24}
          height={24}
        />
      </Link>
      <Link href={"#"}>
        <Image
          src={"/icons/ticket-icon.svg"}
          alt="heart icon"
          width={24}
          height={24}
        />
      </Link>
      <Link href={"#"}>
        <Image
          src={"/icons/heart-icon.svg"}
          alt="heart icon"
          width={24}
          height={24}
        />
      </Link>
      <Link href={"#"}>
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
