import React, { FC } from 'react';

interface Item {
  label: string,
  percent: number
}

interface SkillProps {
  header: string,
  skills: Item[]
}

const Skill: FC<SkillProps> = ({ header, skills }) => (
  <article>
    <header>{header}</header>
    <ul>
      {skills.map(({ label, percent }) => (
        <li key={label}>
          {label} <strong>{`${percent}%`}</strong>
          <progress value={percent} max="100"></progress>
        </li>
      ))}
  </ul>
  </article >
);

export default Skill;
