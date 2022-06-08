import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

describe('<Button />', () => {
  test('it should render', () => {
    const { asFragment } = render(<Button>Button Label</Button>);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
