import clsx from 'clsx';
import React, { FC, MouseEventHandler } from 'react';

import styles from './Skill.module.scss';

interface SkillProps {
  label: string,
  percent: number,
  onClick: MouseEventHandler<HTMLButtonElement>
}

const Skill: FC<SkillProps> = ({ label, percent, onClick }) => (
  <button onClick={onClick} data-testid="Skill">
    {/* @ts-ignore */}
    <div className={clsx(styles.Skill, styles.pie)} style={{ ['--p']: percent }}>
      <span className={styles.Label}>{label}</span>
      <span className={styles.Percentage}>{`${percent}%`}</span>
    </div>
  </button>
);

export default Skill;
