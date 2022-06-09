import React from 'react';
import { render } from '@testing-library/react';

import Skills from './Skills';

describe('<Skills />', () => {
  test('it should mount', () => {
    const { asFragment } = render(<Skills />);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
