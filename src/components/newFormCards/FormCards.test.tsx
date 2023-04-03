import React from 'react';
import { render, screen } from '@testing-library/react';
import FormCardList from './FormCardList';
import FormCard from './FormCard';
import { inputValuetype } from 'pages/form/type';

const mockData: inputValuetype<string> = {
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

describe('Testing Form Card ', () => {
  test('Testing Form card image', () => {
    render(<FormCard card={mockData} />);
    const image = screen.getByTestId('card-image');
    expect(image).toBeInTheDocument();
  });
});
