interface SearchBar {
  placeholder: string;
}

const SearchBar: React.FC<SearchBar> = ({ placeholder }) => {
  return (
    <>
      <span className="flex items-center relative before:content-[url('/icons/Search.svg')] before:h-[20px] before:w-[20px] before:absolute before:z-10 before:left-4 h-14">
        <input
          type="text"
          className="h-14 bg-gray-100 rounded-2xl w-full absolute z-0 ps-12"
          placeholder={placeholder}
        />
      </span>
    </>
  );
};

export default SearchBar;
