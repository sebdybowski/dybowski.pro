import clsx from 'clsx';
import Link from 'next/link';
import React, { FC } from 'react';
import styles from './Skill.module.css';

interface SkillProps {
  label: string,
  percent: number
}

const Skill: FC<SkillProps> = ({ label, percent }) => (
  <button onClick={() => console.log(label)}>
    {/* @ts-ignore */}
    <div className={clsx(styles.Skill, styles.pie)} data-testid="Skill" style={{ ['--p']: percent }}>
      <span className={styles.Label}>{label}</span>
      <span className={styles.Percentage}>{`${percent}%`}</span>
    </div>
  </button>
);

export default Skill;
