import React, { FC } from 'react';

import styles from './Skills.module.scss';

interface SkillsProps {}

const Skills: FC<SkillsProps> = () => (
  <div className={styles.Hero} data-testid="Skills">
    Skills Component
  </div>
);

export default Skills;
