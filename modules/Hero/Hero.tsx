import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import clsx from 'clsx';
import React, { FC } from 'react';

import { Button, Column, Container, Heading } from '../../components';

import styles from './Hero.module.scss';

const Hero: FC = () => (

  <div className={styles.Hero} data-testid="Hero">
    <div className="container">
      <Container section>
        <Column vCenter half className={styles.Hero__Column}>
          <Heading level={2}>Hi, I&apos;m <strong>Seb</strong>.</Heading>
          <Heading level={1} serif brand>Software&nbsp;Engineer & UI/UX&nbsp;Designer</Heading>
          <Heading level={2}>Nice to meet you!</Heading>
          <div className={clsx(styles.Button__Group, 'grid')}>
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
  </div>
);

export default Hero;
