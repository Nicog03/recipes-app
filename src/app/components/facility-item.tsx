interface FacilityItemInterface {
  name: string;
  iconUrl: string;
}

const FacilityItem: React.FC<FacilityItemInterface> = ({ name, iconUrl }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 h-20 w-20 rounded-2xl gap-2">
      <img src={iconUrl} alt="icon image" className="h-8 w-8" />
      <p className="font-montserrat text-xs text-gray-400 whitespace-nowrap">
        {name}
      </p>
    </div>
  );
};

export default FacilityItem;
