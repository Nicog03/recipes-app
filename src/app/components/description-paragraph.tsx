import TextButton from "./text-button";

interface DescriptionParagraphInterface {
  description: string;
}

const DescriptionParagraph: React.FC<DescriptionParagraphInterface> = ({
  description,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-gray-500 font-montserrat text-sm leading-4">
        {description}
      </p>
      <TextButton text="Read more" iconUrl="/icons/down-arrow.svg" />
    </div>
  );
};

export default DescriptionParagraph;
