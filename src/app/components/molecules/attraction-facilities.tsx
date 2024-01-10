import Header from "../header-component";
import FacilityItem from "../facility-item";

const AttractionFacilities = () => {
  return (
    <div className="flex flex-col gap-4">
      <Header text="Facilites" size="small" />
      <div className="grid grid-flow-col justify-between">
        <FacilityItem name="1 Heater" iconUrl="/icons/wifi-icon.svg" />
        <FacilityItem name="Dinner" iconUrl="/icons/food-icon.svg" />
        <FacilityItem name="1 Tub" iconUrl="/icons/bathtub-icon.svg" />
        <FacilityItem name="Pool" iconUrl="/icons/pool-icon.svg" />
      </div>
    </div>
  );
};

export default AttractionFacilities;
