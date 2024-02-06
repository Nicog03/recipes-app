import Header from "../header-component";
import InformationItem from "../information-item";

interface DishInformationInterface {
  readyInMinutes: number;
  servings: number;
  dairyFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
}

const DishInformation: React.FC<DishInformationInterface> = ({
  readyInMinutes,
  dairyFree,
  servings,
  isVegan,
  isVegetarian,
}) => {
  console.log("vegetarian & vegan:", isVegetarian, isVegan);

  return (
    <div className="flex flex-col gap-1">
      <Header text="Dish Information" size="small" />
      <div className="flex gap-2">
        <InformationItem
          name={`${readyInMinutes} min`}
          iconUrl="/icons/cronometer-icon.svg"
        />
        <InformationItem
          name={`${servings} servings`}
          iconUrl="/icons/chart-icon.svg"
        />
        <InformationItem
          name={dairyFree ? "No Dairy" : "Contains Dairy"}
          iconUrl={
            dairyFree ? "/icons/no-dairy-icon.svg" : "/icons/milk-icon.svg"
          }
        />
        {(isVegan || isVegetarian) && (
          <InformationItem
            name={isVegan ? "Vegan" : isVegetarian ? "Vegetarian" : ""}
            iconUrl="/icons/leaf-icon.svg"
          />
        )}
      </div>
    </div>
  );
};

export default DishInformation;
