import React from 'react';
import { render } from '@testing-library/react';

import Hero from './Hero';

describe('<Hero />', () => {
  test('it should mount', () => {
    const { asFragment } = render(<Hero />);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
