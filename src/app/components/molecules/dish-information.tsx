import Header from "../header-component";
import InformationItem from "../information-item";

interface DishInformationInterface {
  readyInMinutes: number;
  servings: number;
  dairyFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  glutenFree: boolean;
}

const DishInformation: React.FC<DishInformationInterface> = ({
  readyInMinutes,
  dairyFree,
  servings,
  isVegan,
  isVegetarian,
  glutenFree,
}) => {
  console.log("vegetarian & vegan:", isVegetarian, isVegan);

  return (
    <div className="flex flex-col gap-1">
      <Header text="Dish Information" size="small" />
      <div
        className="grid gap-2"
        style={{
          gridTemplate: "repeat(auto-fit, 80px) / repeat(auto-fit, 80px)",
        }}
      >
        <InformationItem
          name={`${readyInMinutes} min`}
          iconUrl="/icons/cronometer-icon.svg"
        />
        <InformationItem
          name={`${servings} servings`}
          iconUrl="/icons/chart-icon.svg"
        />
        {!isVegan && (
          <InformationItem
            name={dairyFree ? "No Dairy" : "Contains Dairy"}
            iconUrl={
              dairyFree ? "/icons/no-dairy-icon.svg" : "/icons/milk-icon.svg"
            }
          />
        )}
        {(isVegan || isVegetarian) && (
          <InformationItem
            name={isVegan ? "Vegan" : isVegetarian ? "Vegetarian" : ""}
            iconUrl="/icons/leaf-icon.svg"
          />
        )}
        <InformationItem
          name={glutenFree ? "Gluten free" : "Contains gluten"}
          iconUrl={
            glutenFree
              ? "/icons/gluten-free-icon.svg"
              : "/icons/gluten-icon.svg"
          }
        />
      </div>
    </div>
  );
};

export default DishInformation;
