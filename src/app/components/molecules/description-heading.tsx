import Header from "../header-component";
import Link from "next/link";

interface DescriptionHeadingInterface {
  title: string;
  credits: string;
}

const DescriptionHeading: React.FC<DescriptionHeadingInterface> = ({
  credits,
  title,
}) => {
  return (
    <div>
      <Header text={title} size="medium" />
      <Link
        className="text-[--gray] text-xs underline hover:text-black transition"
        href={"#"}
      >
        {credits}
      </Link>
    </div>
  );
};

export default DescriptionHeading;
