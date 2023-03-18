import CardsList from 'components/cards/CardsList';
import Search from 'components/Search';
import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="container mx-auto my-[50px] px-4">
        <Search />
        <CardsList />
      </div>
    );
  }
}
