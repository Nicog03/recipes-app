"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface SearchBar {
  placeholder: string;
}

const SearchBar: React.FC<SearchBar> = ({ placeholder }) => {
  const { push } = useRouter();

  function navigate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    push("/search");
  }

  return (
    <>
      <form onSubmit={navigate}>
        <span className="flex items-center relative h-14">
          <input
            type="text"
            className="h-14 bg-gray-100 rounded-full w-full absolute p-2 pe-14 focus:border-2 focus:border-[--accent] focus:outline-none focus:ring-0"
            placeholder={placeholder}
          />
          <button className="absolute right-2 text-sm text-white bg-[--accent] p-2 rounded-full hover:opacity-70 transition">
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
