import CardsList from 'components/cards/CardsList';
import Search from 'components/search/Search';
import React from 'react';
const Home = () => {
  return (
    <div data-testid="home" className="container mx-auto my-[50px] px-4">
      <Search />
      <CardsList />
    </div>
  );
};

export default Home;
