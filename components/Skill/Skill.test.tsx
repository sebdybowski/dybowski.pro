import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Skill from './Skill';

describe('<Skill />', () => {
  test('it should mount', () => {
    const onClick = jest.fn();
    const { asFragment } = render(
      <Skill
        label='moonwalk'
        percent={100}
        onClick={onClick}
      />,
    );
    
    const SkillButton = screen.getByTestId('Skill');
    fireEvent.click(SkillButton);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(asFragment()).toMatchSnapshot();
  });
});
