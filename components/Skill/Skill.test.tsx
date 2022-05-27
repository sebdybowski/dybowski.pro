import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Skill from './Skill';

describe('<Skill />', () => {
  test('it should mount', () => {
    render(<Skill />);
    
    const skill = screen.getByTestId('Skill');

    expect(skill).toBeInTheDocument();
  });
});