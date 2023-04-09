import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';
import { mockData } from 'components/cards/Card.test';

const MockModal = () => {
  const [modal, setModal] = useState<boolean | undefined>(false);
  modal;
  return <Modal setModal={setModal} data={mockData} />;
};

describe('Modal test', () => {
  test('is overlay exist', () => {
    render(<MockModal />);
    const overlay = screen.getByTestId('overlay');
    expect(overlay).toBeInTheDocument();
  });
  test('is image fetched', async () => {
    render(<MockModal />);
    const image = screen.getByTestId('image');
    expect(image).toBeInTheDocument();
  });
  test('is name fetched', async () => {
    render(<MockModal />);
    const name = screen.getByTestId('name');
    expect(name).toBeInTheDocument();
  });
  test('is name coming from api', async () => {
    render(<MockModal />);
    const name = screen.getByTestId('name');
    expect(name.textContent).toBe(mockData.name);
  });
  test('is li coming from api', async () => {
    render(<MockModal />);
    const name = screen.getAllByTestId('li');
    expect(name.length).toBe(6);
  });
});
