import React, { FC } from 'react';

import { Column, Container } from '../../components/';

import styles from './Skills.module.scss';

interface SkillsProps {}

const Skills: FC<SkillsProps> = () => (
  <div className={styles.Hero} data-testid="Skills">
    <Container section>
      <Column vCenter>
        <Container fluid>
          <Column hCenter>Skills</Column>
        </Container>
        <Container fluid>
          <Column hCenter>Skill 1</Column>
          <Column hCenter>Skill 2</Column>
          <Column hCenter>Skill 3</Column>
        </Container>
      </Column>
    </Container>
  </div>
);

export default Skills;
