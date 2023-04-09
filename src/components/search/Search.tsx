import React, { SetStateAction, Dispatch } from 'react';

type propsType = {
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
};

const Search = ({ setSearch, search }: propsType) => {
  return (
    <form className="flex items-center w-[400px]">
      <div className="relative w-full">
        <input
          data-testid="input"
          type="text"
          id="simple-search"
          className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          required
        />
      </div>
    </form>
  );
};

export default Search;
