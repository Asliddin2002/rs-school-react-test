import React from 'react';
import { render, screen } from '@testing-library/react';

import About from './About';

test('is About page exist ', () => {
  render(<About />);
  const wraper = screen.getByTestId('about');
  expect(wraper).toBeInTheDocument();
});
test('is About page exist ', () => {
  render(<About />);
  const wraper = screen.getByTestId('about');
  expect(wraper.textContent).toBe('About');
});
