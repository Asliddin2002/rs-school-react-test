import React from 'react';
import CardsItem from './CardsItem';
import { data } from './../../data';

const CardsList = () => {
  return (
    <div className="flex justify-between items-center sm:items-baseline gap-2 flex-wrap mt-[50px]">
      {data.map((house) => (
        <CardsItem key={house.id} house={house} />
      ))}
    </div>
  );
};

export default CardsList;
