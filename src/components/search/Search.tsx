import React, { useEffect, useState } from 'react';

const Search = () => {
  const [search, setSearch] = useState<string>(localStorage.getItem('search') || '');

  useEffect(() => {
    return () => {
      localStorage.setItem('search', search as string);
    };
  });

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setSearch(event.currentTarget.value);
  };

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
          onChange={handleInputChange}
          required
        />
      </div>
      <button
        type="button"
        className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
