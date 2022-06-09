import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import TemplateName from './TemplateName';

describe('<TemplateName />', () => {
  test('it should mount', () => {
    const { asFragment } = render(<TemplateName />);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
