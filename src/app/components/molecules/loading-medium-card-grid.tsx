import LoadingMediumDishCard from "../loading-medium-dish-card";

LoadingMediumDishCard;

export default function LoadingMediumCardGrid() {
  return (
    <div
      className="grid w-full gap-2   justify-center"
      style={{
        gridTemplate: "repeat(auto-fit, 160px) / repeat(auto-fit, 160px)",
      }}
    >
      <LoadingMediumDishCard />
      <LoadingMediumDishCard />
      <LoadingMediumDishCard />
      <LoadingMediumDishCard />
      <LoadingMediumDishCard />
      <LoadingMediumDishCard />
    </div>
  );
}
