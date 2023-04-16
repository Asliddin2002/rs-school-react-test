import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { navs } from 'utils/customData';

import Header from './Header';

const MockHeader = () => {
  return (
    <Router>
      <Header />
    </Router>
  );
};

describe('Header navlink test', () => {
  test('Testing navlink length', () => {
    render(<MockHeader />);
    const cards = screen.getAllByTestId('nav-link');
    expect(cards.length).toBe(navs.length);
  });
});
