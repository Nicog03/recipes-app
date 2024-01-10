interface DescriptionParagraphInterface {
  text: string;
}

const DescriptionParagraph: React.FC<DescriptionParagraphInterface> = ({
  text,
}) => {
  return (
    <p className="text-gray-500 font-montserrat text-sm leading-4">{text}</p>
  );
};

export default DescriptionParagraph;
