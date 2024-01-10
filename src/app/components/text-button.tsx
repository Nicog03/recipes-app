interface TextButtonInterface {
  text: string;
  iconUrl?: string;
}

const TextButton: React.FC<TextButtonInterface> = ({ text, iconUrl }) => {
  return (
    <button className="text-blue-600 hover:brightness-150 transition font-montserrat font-semibold text-sm flex whitespace-nowrap items-center gap-1">
      {text} {iconUrl ? <img src={iconUrl} alt="icon image" /> : null}
    </button>
  );
};

export default TextButton;
