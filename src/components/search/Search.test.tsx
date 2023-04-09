import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Search from './Search';

// describe('Search panel test', () => {
//   test('Test input value', () => {
//     render(<Search />);
//     const input = screen.getByTestId<HTMLInputElement>('input');
//     fireEvent.change(input, { target: { value: 'hello' } });
//     expect(input.value).toBe('hello');
//   });
//   test('Test input value is equal localstorage value', () => {
//     render(<Search />);
//     const input = screen.getByTestId<HTMLInputElement>('input');
//     fireEvent.change(input, { target: { value: 'hello' } });
//     expect(localStorage.getItem('search')).toBe('hello');
//   });
// });
