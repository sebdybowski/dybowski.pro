import Heading from '../components/Heading/Heading';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import clsx from 'clsx';
import styles from './Index.module.css';
import Container from '@/components/Container/Container';
import { Fragment } from 'react';
import Button from '@/components/Button/Button';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Paragraph from '@/components/Paragraph/Paragraph';
import Skill from '@/components/Skill/Skill';

const Home: NextPage = () => (
  <Fragment>
    <Head>
      <title>{'Seb Dybowski\'s portfolio'}</title>
      <meta name="description" content="Seb Dybowski's portfolio" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <Container className={styles.Hero} id='home'>
      <div className={clsx(
        styles.Column,
        styles['Column--vcentered'],
        styles['Column--narrow'],
      )}>
        <div>
          <Heading level={2}>{'Hi, I\'m Seb'}</Heading>
          <Heading level={1} serif brand>Software Engineer & UI/UX Designer</Heading>
          <Heading level={2}>Nice to meet you!</Heading>
          <a href="https://www.linkedin.com/in/sebastian-dybowski/" target="_blank" rel="noreferrer">
            <Button
              icon={faArrowUpRightFromSquare}
              outline
            >my experience</Button>
          </a>
          <a href="#contact">
            <Button>contact</Button>
          </a>
        </div>
      </div>
      <div className={clsx(
        styles.Column,
        styles['Column--wide'],
      )}>
        <Image
          src='/seb2.png'
          alt='Hero background'
          layout='fill'
          objectFit='contain'
          objectPosition="90% bottom"
          className={styles.Portrait}
        />
      </div>
    </Container>
    <Container className={styles.Skills} id='skills'>
      <Heading level={2} section serif>Skills</Heading>
      <Paragraph>Discover what my key strenghts are.</Paragraph>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Skill label='Front-end' percent={90} />
        <Skill label='Back-end' percent={50} />
        <Skill label='UI/UX' percent={75} />
      </div>
    </Container>
    <Container className={styles.Contact} id='contact'>
      <Heading level={2} section serif>Contact</Heading>
      <Paragraph>I am thrilled to get in touch!</Paragraph>
      <Button primary>Linkedin</Button>
      <a href='mailto:dybowski.seb@gmail.com'>
        <Button primary>Mail</Button>
      </a>
    </Container>
    <Footer />
  </Fragment>
);

export default Home;
