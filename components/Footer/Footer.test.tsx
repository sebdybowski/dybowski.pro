import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

describe('<Footer />', () => {
  test('it should mount', () => {
    const { asFragment } = render(<Footer />);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
