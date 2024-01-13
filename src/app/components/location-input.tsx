import Image from "next/image";
import ChangeLocationModal from "./molecules/change-location-modal";
import { useState } from "react";

interface LocationInputTypes {
  locationName: string;
}

const LocationInput: React.FC<LocationInputTypes> = ({ locationName }) => {
  const [showModal, setShowModal] = useState(false);

  const onClickHandler = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <button onClick={onClickHandler} className="flex gap-2 items-center">
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
      {showModal ? (
        <ChangeLocationModal clickFunction={onClickHandler} />
      ) : null}
    </div>
  );
};

export default LocationInput;
