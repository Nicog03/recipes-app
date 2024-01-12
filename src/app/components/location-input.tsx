import Image from "next/image";

interface LocationInputTypes {
  locationName: string;
}

const LocationInput: React.FC<LocationInputTypes> = ({ locationName }) => {
  return (
    <button className="flex gap-2 items-center p-1 rounded-xl hover:bg-gray-100 transition">
      <Image
        src={"/icons/location-pin.svg"}
        alt="location pin icon"
        width={16}
        height={16}
      ></Image>
      <p className="text-xs">{locationName}</p>
      <Image
        src={"/icons/arrow-down.svg"}
        alt="down pointing arrow"
        width={16}
        height={16}
      ></Image>
    </button>
  );
};

export default LocationInput;
