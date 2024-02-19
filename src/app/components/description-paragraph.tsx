import TextButton from "./text-button";
import { useState } from "react";

interface DescriptionParagraphInterface {
  description: string;
}

const DescriptionParagraph: React.FC<DescriptionParagraphInterface> = ({
  description,
}) => {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="flex flex-col gap-1">
      <div className="text-gray-500 font-montserrat text-sm sm:text-base sm:leading-5 leading-4 relative">
        {hidden && (
          <span
            className="absolute left-0 right-0 top-0 bottom-0"
            style={{
              background: `linear-gradient(to bottom, transparent, transparent, white)`,
            }}
          />
        )}
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          className={`${!hidden ? "h-fit" : "max-h-24"} ` + "overflow-hidden"}
        ></p>
      </div>
      <TextButton
        text={`${hidden ? "Show more" : "Show less"}`}
        iconUrl={`${hidden ? "/icons/down-arrow.svg" : "/icons/up-arrow.svg"}`}
        onClick={() => setHidden((prev) => !prev)}
      />
    </div>
  );
};

export default DescriptionParagraph;
