import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import React, { FC } from 'react';

import { Button, Column, Container, Heading } from '../../components';

import styles from './Hero.module.scss';

interface HeroProps {}

const Hero: FC<HeroProps> = () => (
  <div className={styles.Hero} data-testid="Hero">
    <Container section>
      <Column vCenter half className={styles.Hero__Column}>
        <Heading level={2}>{'Hi, I\'m Seb'}</Heading>
        <Heading level={1} serif brand>Software&nbsp;Engineer &<br/>UI/UX&nbsp;Designer</Heading>
        <Heading level={2}>Nice to meet you!</Heading>
        <div className={styles.Button__Group}>
          <a href="https://www.linkedin.com/in/sebastian-dybowski/" target="_blank" rel="noreferrer">
            <Button
              icon={faLinkedin}
              outline
              inverted
            >my experience</Button>
          </a>
          <a href="https://github.com/sebdybowski">
            <Button
              icon={faGithub}
              outline
              inverted
            >my code</Button>
          </a>
        </div>
      </Column>
    </Container>
  </div>
);

export default Hero;
