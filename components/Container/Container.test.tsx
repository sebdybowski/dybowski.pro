import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import Container from './Container';

describe('<Container />', () => {
  test('it should mount', () => {
    const { asFragment } = render(<Container>Content</Container>);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
