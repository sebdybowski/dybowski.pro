import React from 'react';
import { render } from '@testing-library/react';

import Column from './Column';

describe('<Column />', () => {
  test('it should mount', () => {
    const { asFragment } = render(<Column />);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
