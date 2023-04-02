import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './Layout';
import Header from 'components/header/Header';

const MockLayout = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

test('is Layout exist ', () => {
  render(<MockLayout />);
  const wraper = screen.getByTestId('layout');
  expect(wraper).toBeInTheDocument();
});
