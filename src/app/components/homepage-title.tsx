import Image from "next/image";
import Link from "next/link";

interface TitleTypes {
  userName: string;
}

const HomepageTitle: React.FC<TitleTypes> = ({ userName }) => {
  return (
    <div className="flex items-center justify-between font-montserrat">
      <div className="flex gap-3">
        <Image
          alt="chef hat icon"
          src={"icons/chef-hat-icon.svg"}
          height={32}
          width={32}
        ></Image>
        <div>
          <p className="text-sm">Hello,</p>
          <h1 className="text-3xl font-semibold">{userName}</h1>
        </div>
      </div>
      {/* 
      This will only be displayed when the screen has a width larger that 768px 
      */}
      <ul className="hidden sm:flex gap-5 font-montserrat hover:[&_a]:text-[--accent] [&_a]:transition">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#">Favorites</Link>
        </li>
        <li>
          <Link href="#">Profile</Link>
        </li>
      </ul>
      <button className="opacity-50 hover:opacity-100 transition">
        <Image
          src={"icons/help-icon.svg"}
          alt="about this project"
          width={32}
          height={32}
        ></Image>
      </button>
    </div>
  );
};

export default HomepageTitle;
