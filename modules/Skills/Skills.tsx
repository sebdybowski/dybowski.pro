import React, { FC } from 'react';

import { Heading, Skill } from '../../components/';

import styles from './Skills.module.scss';

interface SkillsProps { }

const Skills: FC<SkillsProps> = () => (
  <div className={styles.Skills} data-testid="Skills">
    <div className='container'>
      <br />
        <Heading level={1} section># Skills</Heading>
        <p>
          Check my skillset!
        </p>
      <div className='grid'>
        <Skill
          header='Backend'
          skills={[
            { label: 'Java', percent: 30 },
            { label: 'SQL', percent: 50 },
            { label: 'Node.js', percent: 60 },
          ]}
        />
        <Skill
          header='Frontend'
          skills={[
            { label: 'JavaScript', percent: 90 },
            { label: 'React.js', percent: 100 },
            { label: 'Vue.js', percent: 50 },
          ]}
        />
        <Skill
          header='UI/UX'
          skills={[
            { label: 'Figma', percent: 70 },
            { label: 'A/B Testing', percent: 100 },
            { label: 'Prototyping', percent: 80 },
          ]}
        />
      </div>
    </div>
    <br/>
    <br/>
  </div>
);

export default Skills;
