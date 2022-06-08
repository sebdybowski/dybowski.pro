import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import Heading from './Heading';

describe('<Heading />', () => {
  test('it should mount', () => {
    const { asFragment } = render(<Heading>Heading!</Heading>);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
