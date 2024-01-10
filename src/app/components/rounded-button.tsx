interface RoundedButtonInterface {
  imageUrl: string;
}

const RoundedButton: React.FC<RoundedButtonInterface> = ({ imageUrl }) => {
  return (
    <button
      type="button"
      className="absolute h-11 w-11 right-3 -bottom-5 bg-gray-200 hover:bg-gray-300 transition rounded-full p-2"
    >
      <img src={imageUrl} alt="heart icon" className="invert" />
    </button>
  );
};

export default RoundedButton;
