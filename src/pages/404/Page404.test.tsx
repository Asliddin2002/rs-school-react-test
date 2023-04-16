import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Page404 from './Page404';

const MockPage404 = () => {
  return (
    <Router>
      <Page404 />
    </Router>
  );
};

describe('Header navlink test', () => {
  test('Testing link content', () => {
    render(<MockPage404 />);
    const backToHome = screen.getByTestId('nav-link');
    expect(backToHome.textContent).toBe('Back to Home');
  });

  test('Testing link push to home', () => {
    render(<MockPage404 />);
    const backToHome = screen.getByTestId('nav-link');
    fireEvent.click(backToHome);
    expect(window.location.pathname).toBe('/');
  });
});
