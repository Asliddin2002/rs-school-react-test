import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Check home page', () => {
  test('is wraper of home exist ', () => {
    render(<Home />);
    const titleinfo = screen.getByTestId('home');
    expect(titleinfo).toBeInTheDocument();
  });
});
