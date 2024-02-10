import Header from "../components/header-component";
import SearchBar from "../components/search-bar";
import SquaredButton from "../components/squared-button";
import SearchResults from "../components/molecules/search-results-section";

export default function SearchPage() {
  return (
    <div className="ps-5 pe-5 pt-5 flex flex-col gap-2">
      <div className="flex gap-2 bg-slate-100 p-2 rounded-xl items-center">
        <SquaredButton imageUrl="/icons/left-caret-icon.svg" />
        <Header size="large" text="Search" />
      </div>
      <SearchBar placeholder="Search for dishes" />
      <SearchResults />
    </div>
  );
}
