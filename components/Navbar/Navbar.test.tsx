import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Home from '@/pages/index';

import Navbar from './Navbar';

describe('<Navbar />', () => {
  test('it should mount', () => {
    const { asFragment } = render(<Navbar />);
    
    expect(asFragment()).toMatchSnapshot();
  });
  test('it should trigger useEffect on scroll', () => {
    render(<Home />);

    const Homepage = screen.getByTestId('Home');

    fireEvent.scroll(Homepage);

    expect(screen.getByTestId('Navbar')).toBeInTheDocument();
  });
});
