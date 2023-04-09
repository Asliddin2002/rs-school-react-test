import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('Check form page', () => {
  test('is Info title exist ', () => {
    render(<Form />);
    const titleinfo = screen.getByTestId('infos-title');
    expect(titleinfo).toBeInTheDocument();
    expect(titleinfo.textContent).toBe('Personal information');
  });
});
