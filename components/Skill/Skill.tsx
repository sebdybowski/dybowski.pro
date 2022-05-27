import clsx from 'clsx';
import React, { FC } from 'react';
import { number } from 'yup';
import styles from './Skill.module.css';

interface SkillProps {
  label: string,
  percent: number
}

const Skill: FC<SkillProps> = ({ label, percent }) => (
  <div className={clsx(styles.Skill, styles.pie)} data-testid="Skill" style={{ ['--p']: percent }}>
    <span className={styles.Label}>{label}</span>
  </div>
);

export default Skill;
