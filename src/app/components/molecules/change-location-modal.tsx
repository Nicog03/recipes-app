import SearchBar from "../search-bar";
import Image from "next/image";
import Header from "../header-component";
import { MouseEventHandler } from "react";
import Button from "../button";

interface I {
  clickFunction:
    | MouseEventHandler<HTMLButtonElement>
    | MouseEventHandler<HTMLDivElement>;
}

const ChangeLocationModal: React.FC<I> = ({ clickFunction }) => {
  return (
    <div>
      <section className="flex flex-col left-0 right-0 p-5 mx-5 fixed bg-white gap-2  z-30 rounded-2xl top-1/2 -translate-y-1/2">
        <div className="flex justify-between">
          <Header size="small" text="Select the country" />{" "}
          <button
            className="hover:bg-gray-200 transition rounded-full h-fit w-fit p-1"
            onClick={clickFunction as MouseEventHandler<HTMLButtonElement>}
          >
            <Image
              src={"/icons/close-icon.svg"}
              width={24}
              height={24}
              alt="close button"
            />
          </button>
        </div>
        <form className="flex flex-col gap-2">
          <SearchBar placeholder="Country" />
          <Button text="Search" />
        </form>
      </section>
      <div
        onClick={clickFunction as MouseEventHandler<HTMLDivElement>}
        className="bg-black fixed w-screen h-screen left-0 top-0 z-20 opacity-25"
      ></div>
    </div>
  );
};

export default ChangeLocationModal;
