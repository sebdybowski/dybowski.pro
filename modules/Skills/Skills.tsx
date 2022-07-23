import { faAngular, faAws, faCss3Alt, faFigma, faHtml5, faJava, faJs, faNode, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faCompassDrafting, faObjectGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';

import { Column, Container, Heading } from '../../components/';

import styles from './Skills.module.scss';

interface SkillsProps { }

const Skills: FC<SkillsProps> = () => (
  <div className={styles.Skills} data-testid="Skills">
    <div className='container'>
      <br />
        <h2># Skills</h2>
        <p>
          Check my skillset!
        </p>
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
            <li>
              JavaScript <strong>90%</strong>
              <progress value="90" max="100"></progress>
            </li>            <li>
              React <strong>100%</strong>
              <progress value="100" max="100"></progress>
            </li>
            <li>
              Vue <strong>50%</strong>
              <progress value="50" max="100"></progress>
            </li>
          </ul>
        </article>
        <article>
          <header>UI/UX</header>
          <ul>
            <li>Figma</li>
            <li>A/B testing</li>
            <li>Prototyping</li>
          </ul>
        </article>
      </div>
    </div>
  </div>
);

export default Skills;
