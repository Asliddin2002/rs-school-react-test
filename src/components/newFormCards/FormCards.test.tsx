import React from 'react';
import { render, screen } from '@testing-library/react';
import FormCardList from './FormCardList';

const mockData = {
  name: 'Asliddin',
  image: 'image',
  gender: 'male',
  continent: 'asian',
  date: '10.03.2002',
  agreement: true,
};

describe('Testing Form Card list', () => {
  test('Testing Form cardlist length', () => {
    render(<FormCardList data={[mockData]} />);
    const cards = screen.getAllByTestId('card');
    expect(cards.length).toBe([mockData].length);
  });
});
