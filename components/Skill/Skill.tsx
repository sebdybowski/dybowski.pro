import React, { FC, MouseEventHandler } from 'react';

interface Skill {
  label: string,
  percent: number
}

interface SkillProps {
  header: string,
  skills: Skill[]
}

const Skill: FC<SkillProps> = ({ header, skills }) => (
  <article>
    <header>{header}</header>
    <ul>
      {skills.map(({ label, percent }) => (
        <li>
          {label} <strong>{`${percent}%`}</strong>
          <progress value={percent} max="100"></progress>
        </li>
      ))}
  </ul>
  </article >
);

export default Skill;
