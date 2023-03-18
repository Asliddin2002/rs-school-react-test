import React, { Component } from 'react';

type MyState = {
  search: string; // like this
};

export default class Search extends Component {
  state: MyState = {
    search: localStorage.getItem('search') || '',
  };

  componentWillUnmount() {
    localStorage.setItem('search', this.state.search);
  }

  handleInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      search: event.currentTarget.value,
    });
  };

  render() {
    return (
      <form className="flex items-center w-[400px]">
        <div className="relative w-full">
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            value={this.state.search}
            onChange={this.handleInputChange}
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
  }
}
