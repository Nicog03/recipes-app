"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface SearchBar {
  placeholder: string;
}

const SearchBar: React.FC<SearchBar> = ({ placeholder }) => {
  const [isValid, setIsValid] = useState(true);

  const { push } = useRouter();

  function navigate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const inputValue: string = (
      (e.target as HTMLFormElement)[0] as HTMLInputElement
    ).value;

    if (inputValue) {
      setIsValid(true);
      push(`/search?term=${inputValue}`);
    } else {
      setIsValid(false);
    }
  }

  return (
    <>
      <form onSubmit={navigate} className="md:w-96 md:self-end">
        <span className="flex items-center relative h-14">
          {!isValid && (
            <p className="absolute text-sm -bottom-5 left-3 font-montserrat text-red-400 font-semibold">
              Invalid value
            </p>
          )}
          <input
            type="text"
            className={`${
              !isValid && "border-2 border-red-400"
            } h-14 bg-gray-100 rounded-full w-full absolute p-2 pe-14 focus:border-2 focus:border-[--accent] focus:outline-none focus:ring-0`}
            placeholder={placeholder}
            onFocus={() => setIsValid(true)}
          />
          <button
            className={`${
              !isValid && "saturate-0"
            } absolute right-2 text-sm text-white bg-[--accent] p-2 rounded-full hover:opacity-70 transition`}
          >
            <Image
              className="invert"
              alt="magnifying glass icon"
              src={"/icons/search-icon.svg"}
              height={24}
              width={24}
            />
          </button>
        </span>
      </form>
    </>
  );
};

export default SearchBar;
