import { faAngular, faAws, faCss3Alt, faFigma, faHtml5, faJava, faJs, faNode, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faCompassDrafting, faObjectGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';

import { Column, Container, Heading } from '../../components/';

import styles from './Skills.module.scss';

interface SkillsProps { }

const Skills: FC<SkillsProps> = () => (
  <div className={styles.Hero} data-testid="Skills">
    <div className='container'>
      <br />
      <div className='grid'>
        <h2>Skills</h2>
      </div>
      <div className='grid'>
        <article>
          <header>Back-end</header>
          <ul>
            <li>Java</li>
          </ul>
        </article>
        <article>
          <header>Front-end</header>
          <ul>
            <li>Javascript <progress value="90" max="100"></progress></li>
            <li>
              <FontAwesomeIcon
                size='1x'
                icon={faReact}
              />
              React <strong>90%</strong>
              <progress value="100" max="100"></progress></li>
          </ul>
        </article>
        <article>
          <header>UI/UX</header>
          <ul>
            <li>React</li>
          </ul>
        </article>
      </div>
    </div>
  </div>
);

export default Skills;
