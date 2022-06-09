import React from 'react';
import { render } from '@testing-library/react';

import Container from './Container';

describe('<Container />', () => {
  test('it should mount', () => {
    const { asFragment } = render(
      <Container
        className='className'
        id='id'
      >Content</Container>,
    );
    
    expect(asFragment()).toMatchSnapshot();
  });
});
