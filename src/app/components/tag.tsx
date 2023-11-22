interface Tag {
  text: string;
  selected?: boolean;
  href: string;
}

const Tag: React.FC<Tag> = ({ text, selected, href }) => {
  return (
    <>
      <a
        href={href}
        className={
          selected
            ? "text-blue-600 font-bold bg-gray-100 px-4 py-3 rounded-3xl text-sm"
            : "text-gray-500 px-4 py-3 rounded-3xl text-sm"
        }
      >
        {text}
      </a>
    </>
  );
};

export default Tag;
