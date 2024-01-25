interface TextButtonInterface {
  text: string;
  iconUrl?: string;
}

const TextButton: React.FC<TextButtonInterface> = ({ text, iconUrl }) => {
  return (
    <button className="text-[--accent] hover:brightness-120 transition font-montserrat font-semibold text-sm flex whitespace-nowrap items-center gap-1">
      {text} {iconUrl ? <img src={iconUrl} alt="icon image" /> : null}
    </button>
  );
};

export default TextButton;
