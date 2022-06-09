import React from 'react';
import { render } from '@testing-library/react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';

describe('<Button />', () => {
  test('it should render with the default props', () => {
    const { asFragment } = render(
      <Button>Button Label</Button>);
    
    expect(asFragment()).toMatchSnapshot();
  });

  test('it should render with the optional props', () => {
    const { asFragment } = render(
      <Button
        outline
        primary
        icon={faArrowUpRightFromSquare}
      >Button Label</Button>);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
