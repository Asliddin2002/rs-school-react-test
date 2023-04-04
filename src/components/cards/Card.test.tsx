import React from 'react';
import { render, screen } from '@testing-library/react';

import CardsItem from './CardsItem';
import CardsList from './CardsList';
import { data } from './../../data';

const mockData = {
  id: 1,
  description: '5 bedrooms with fascinating view in the middle of city',
  price: 20_000_000,
  location: 'Wilton Mews, Belgravia, London, SW1X',
  images: 'house1',
  isSelled: true,
};

describe('Testing Card list', () => {
  test('Testing cardlist length', () => {
    render(<CardsList />);
    const cards = screen.getAllByTestId('card');
    expect(cards.length).toBe(data.length);
  });
});

describe('Testing Card items details', () => {
  test('Testing card description', () => {
    render(<CardsItem house={mockData} />);
    const description = screen.getByTestId('desc');
    expect(description).toBeInTheDocument();
    expect(description.textContent).toBe(mockData.description);
  });

  test('Testing card Location', () => {
    render(<CardsItem house={mockData} />);
    const location = screen.getByTestId('location');
    expect(location).toBeInTheDocument();
    expect(location.textContent).toBe(mockData.location);
  });

  test('Testing card Price', () => {
    render(<CardsItem house={mockData} />);
    const price = screen.getByTestId('price');
    expect(price).toBeInTheDocument();
    expect(price.textContent).toBe(mockData.price + ' ' + 'so`m');
  });

  test('Testing card status', () => {
    render(<CardsItem house={mockData} />);
    const status = screen.getByTestId('card-status');
    expect(status.textContent).toBe('Selled');
  });
});
