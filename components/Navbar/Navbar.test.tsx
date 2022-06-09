import React from 'react';
import { render } from '@testing-library/react';

import Navbar from './Navbar';

describe('<Navbar />', () => {
  test('it should mount', () => {
    const { asFragment } = render(<Navbar />);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
