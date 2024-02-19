import { MouseEventHandler } from "react";

interface TextButtonInterface {
  text: string;
  iconUrl?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const TextButton: React.FC<TextButtonInterface> = ({
  text,
  iconUrl,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="text-[--accent] hover:brightness-120 transition font-montserrat font-semibold text-sm sm:text-base flex whitespace-nowrap items-center gap-1"
    >
      {text} {iconUrl ? <img src={iconUrl} alt="icon image" /> : null}
    </button>
  );
};

export default TextButton;
