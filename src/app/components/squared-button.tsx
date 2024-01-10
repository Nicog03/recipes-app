"use client";

import { useRouter } from "next/navigation";

interface SquaredButtonInterface {
  imageUrl: string;
}

const SquaredButton: React.FC<SquaredButtonInterface> = ({ imageUrl }) => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        router.back();
      }}
      className="bg-white h-10 w-10 flex items-center justify-center rounded-lg hover:bg-gray-200 transition"
    >
      <img src={imageUrl} alt="button icon" />
    </button>
  );
};

export default SquaredButton;
