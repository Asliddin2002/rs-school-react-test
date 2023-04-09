import React, { useEffect, useState } from 'react';
import useDataFetch from 'api/useDataFetch';
import CardsList from 'components/cards/CardsList';
import Search from 'components/search/Search';

const Home = () => {
  const [search, setSearch] = useState<string>(localStorage.getItem('search') || '');
  const { data, loading } = useDataFetch(search);

  useEffect(() => {
    return () => {
      localStorage.setItem('search', search as string);
    };
  });

  return (
    <div
      data-testid="home"
      className="container mx-auto my-[50px] px-4 flex flex-col items-center justify-center"
    >
      <Search setSearch={setSearch} search={search} />
      {loading ? <h1 className="text-[24px] mt-[100px]">Loading...</h1> : <CardsList data={data} />}
    </div>
  );
};

export default Home;
