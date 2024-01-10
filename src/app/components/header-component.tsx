interface HeaderInterface {
  text: string;
  size: "small" | "medium" | "large";
}

const Header: React.FC<HeaderInterface> = ({ text, size }) => {
  return (
    <h1
      className={`font-montserrat font-semibold ${
        size === "large"
          ? "text-3xl"
          : size === "medium"
          ? "text-2xl"
          : "text-lg"
      }`}
    >
      {text}
    </h1>
  );
};

export default Header;
