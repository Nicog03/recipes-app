import Image from "next/image";

interface TitleTypes {
  userName: string;
}

const HomepageTitle: React.FC<TitleTypes> = ({ userName }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3">
        <Image
          alt="chef hat icon"
          src={"icons/chef-hat-icon.svg"}
          height={32}
          width={32}
        ></Image>
        <div>
          <p className="text-sm">Hello,</p>
          <h1 className="text-3xl font-medium">{userName}</h1>
        </div>
      </div>
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
