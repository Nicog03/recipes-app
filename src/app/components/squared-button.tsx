interface SquaredButtonInterface {
  imageUrl: string;
}

const SquaredButton: React.FC<SquaredButtonInterface> = ({ imageUrl }) => {
  return (
    <button className="bg-white h-10 w-10 flex items-center justify-center rounded-lg">
      <img src={imageUrl} alt="button icon" />
    </button>
  );
};

export default SquaredButton;
