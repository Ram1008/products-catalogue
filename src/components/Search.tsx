import React from "react";
import { CiSearch } from "react-icons/ci";

interface SearchProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  darkMode: boolean;
}

const Search: React.FC<SearchProps> = React.memo(({ setSearchTerm, searchTerm, darkMode }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex justify-start items-center p-2 box-border rounded border border-secondary shadow w-[30%] gap-2">
      <CiSearch className={`text-secondary text-xl  ${darkMode ? 'text-white' : 'text-gray-800'}`} />
      <input
        className={`border-none bg-none outline-none text-xs ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} placeholder:text-primary-gray w-full`}
        type="text"
        placeholder="Search"
        name="searchTerm"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
})

export default Search;
