import Link from "next/link";

interface ReviewSummaryInterface {
  reviewValue: string;
  reviewAmount: number;
}

const ReviewSummary: React.FC<ReviewSummaryInterface> = ({
  reviewValue,
  reviewAmount,
}) => {
  return (
    <Link
      href="#"
      className="flex gap-1 text-gray-400 font-montserrat text-xs items-center w-fit"
    >
      <img src="/icons/star.svg" alt="star icon" />
      {reviewValue} ({reviewAmount} Reviews)
    </Link>
  );
};

export default ReviewSummary;
