import { faAngular, faAws, faCss3Alt, faFigma, faHtml5, faJava, faJs, faNode, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faCompassDrafting, faObjectGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';

import { Column, Container, Heading } from '../../components/';

import styles from './Skills.module.scss';

interface SkillsProps { }

const Skills: FC<SkillsProps> = () => (
  <div className={styles.Hero} data-testid="Skills">
    <Container section>
      <Column vCenter>
        <Container fluid>
          <Column hCenter>
            <Heading level={1} serif brand >Skills</Heading>
          </Column>
        </Container>
        <Container fluid>
          <Column hCenter>
            <Heading level={2}>Front-end</Heading>
            <Container fluid>
              <Column hCenter>
                <FontAwesomeIcon
                  size='2x'
                  icon={faJs}
                />
                <span>JavaScript</span>
              </Column>
              <Column hCenter>
                <FontAwesomeIcon
                  size='2x'
                  icon={faReact}
                />
                <span>React.js</span>
              </Column>
              <Column hCenter>
                <FontAwesomeIcon
                  size='2x'
                  icon={faVuejs}
                />
                <span>Vue.js</span>
              </Column>
            </Container>
            <Container fluid>
              <Column hCenter>
                <FontAwesomeIcon
                  size='2x'
                  icon={faAngular}
                />
                <span>Angular.js</span>
              </Column>
              <Column hCenter>
                <FontAwesomeIcon
                  size='2x'
                  icon={faCss3Alt}
                />
                <span>CSS3</span>
              </Column>
              <Column hCenter>
                <FontAwesomeIcon
                  size='2x'
                  icon={faHtml5}
                />
                <span>HTML5</span>
              </Column>
            </Container>
          </Column>
          <Column hCenter>
            <Heading level={2}>Back-end</Heading>
            <Container fluid>
              <Column hCenter>
                <FontAwesomeIcon
                  size='2x'
                  icon={faNode}
                />
                <span>Node.js</span>
              </Column>
              <Column hCenter>
                <FontAwesomeIcon
                  size='2x'
                  icon={faJava}
                />
                <span>Java</span>
              </Column>
              <Column hCenter>
                <FontAwesomeIcon
                  size='2x'
                  icon={faAws}
                />
                <span>AWS</span>
              </Column>
            </Container>
          </Column>
          <Column hCenter>
            <Heading level={2}>UI/UX</Heading>
            <Container fluid>
              <Column hCenter>
                <FontAwesomeIcon
                  size='2x'
                  icon={faFigma}
                />
                <span>Figma</span>
              </Column>
              <Column hCenter>
                <FontAwesomeIcon
                  size='2x'
                  icon={faObjectGroup}
                />
                <span>Mockups</span>
              </Column>
              <Column hCenter>
                <FontAwesomeIcon
                  size='2x'
                  icon={faCompassDrafting}
                />
                <span>A/B Testing</span>
              </Column>
            </Container>
          </Column>
        </Container>
      </Column>
    </Container>
  </div>
);

export default Skills;
