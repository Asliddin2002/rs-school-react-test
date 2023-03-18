import React, { Component } from 'react';
import CardsItem from './CardsItem';
import { data } from './../../data';

export default class CardsList extends Component {
  render() {
    return (
      <div className="flex justify-between items-center sm:items-baseline gap-2 flex-wrap mt-[50px]">
        {data.map((house) => (
          <CardsItem key={house.id} house={house} />
        ))}
      </div>
    );
  }
}
