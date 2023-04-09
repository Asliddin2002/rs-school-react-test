import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Search from './Search';

const MockSearch = () => {
  const [search, setSearch] = useState(localStorage.getItem('search') || '');
  return <Search setSearch={setSearch} search={search} />;
};

describe('Search panel test', () => {
  test('Test input value', () => {
    render(<MockSearch />);
    const input = screen.getByTestId<HTMLInputElement>('input');
    fireEvent.change(input, { target: { value: 'hello' } });
    expect(input.value).toBe('hello');
  });
});
