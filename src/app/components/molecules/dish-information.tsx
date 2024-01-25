import Header from "../header-component";
import InformationItem from "../information-item";

const DishInformation = () => {
  return (
    <div className="flex flex-col gap-1">
      <Header text="Dish Information" size="small" />
      <div className="flex gap-2">
        <InformationItem name="45 min" iconUrl="/icons/cronometer-icon.svg" />
        <InformationItem name="2 servings" iconUrl="/icons/chart-icon.svg" />
        <InformationItem name="Contains Dairy" iconUrl="/icons/milk-icon.svg" />
      </div>
    </div>
  );
};

export default DishInformation;
