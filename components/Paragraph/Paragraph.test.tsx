import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import Paragraph from './Paragraph';

describe('<Paragraph />', () => {
  test('it should mount', () => {
    const { asFragment } = render(<Paragraph>Content</Paragraph>);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
