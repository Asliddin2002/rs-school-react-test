import React from 'react';
import { render, screen } from '@testing-library/react';

import CardsItem from './CardsItem';
import { dataType } from 'api/datatype';

export const mockData = {
  academyAwardNominations: 2,
  academyAwardWins: 3,
  boxOfficeRevenueInMillions: 5,
  budgetInMillions: 6,
  name: 'dsff',
  rottenTomatoesScore: 4,
  runtimeInMinutes: 5,
  _id: '123456778',
};

const MockCradItem = () => {
  const handleModalOpen = () => {};
  const item: dataType = mockData;

  return <CardsItem key={item?._id} handleModalOpen={handleModalOpen} item={item} />;
};

describe('Testing Card items details', () => {
  test('Testing card title', async () => {
    render(<MockCradItem />);
    const title = screen.getByTestId('title');
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe(mockData.name);
  });

  test('Testing card image', async () => {
    render(<MockCradItem />);
    const image = screen.getByTestId('image');
    expect(image).toBeInTheDocument();
  });
});
