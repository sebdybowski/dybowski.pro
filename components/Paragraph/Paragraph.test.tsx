import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Paragraph from './Paragraph';

describe('<Paragraph />', () => {
  test('it should mount', () => {
    render(<Paragraph />);
    
    const paragraph = screen.getByTestId('Paragraph');

    expect(paragraph).toBeInTheDocument();
  });
});