import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { navs } from 'utils/customData';

export default class Header extends Component {
  render() {
    return (
      <nav className="flex items-center justify-center h-[70px] gap-5 shadow-md w-full">
        {navs.map((nav) => (
          <NavLink
            data-testid="nav-link"
            key={nav.id}
            to={nav.path}
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? 'bold' : '',
                color: isPending ? 'red' : 'black',
              };
            }}
          >
            {nav.title}
          </NavLink>
        ))}
      </nav>
    );
  }
}
