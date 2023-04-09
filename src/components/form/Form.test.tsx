import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';

import FormElements from './FormElements';
import { inputValuetype } from 'pages/form/type';
import Form from 'pages/form/Form';

const MockForm = () => {
  const [data, setData] = useState<inputValuetype<string>[]>([]);
  data;
  return <FormElements setData={setData} />;
};

describe('Form elements test', () => {
  test('count of inputs', () => {
    render(<MockForm />);
    const cards = screen.getAllByTestId('input');
    expect(cards.length).toBe(6);
  });
  test('count of validations', () => {
    render(<MockForm />);
    const cards = screen.getAllByTestId('text-input-validation');
    expect(cards.length).toBe(6);
  });
  test('count of label', () => {
    render(<MockForm />);
    const cards = screen.getAllByTestId('label');
    expect(cards.length).toBe(7);
  });
});

describe('Form component test', () => {
  test('Page title test', () => {
    render(<Form />);
    const cards = screen.getByTestId('infos-title');
    expect(cards).toBeInTheDocument();
  });
  test('Page title test2', () => {
    render(<Form />);
    const title = screen.getByTestId('infos-title');
    expect(title.textContent).toBe('Personal information');
  });
});
