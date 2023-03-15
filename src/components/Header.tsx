import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav className="flex items-center justify-center h-[70px] gap-5 shadow-md w-full">
        <NavLink
          to="/"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? 'bold' : '',
              color: isPending ? 'red' : 'black',
            };
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? 'bold' : '',
              color: isPending ? 'red' : 'black',
            };
          }}
        >
          About
        </NavLink>
      </nav>
    );
  }
}
