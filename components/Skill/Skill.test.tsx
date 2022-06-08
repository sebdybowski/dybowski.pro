import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import Skill from './Skill';

describe('<Skill />', () => {
  test('it should mount', () => {
    const { asFragment } = render(<Skill label='moonwalk' percent={100} />);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
