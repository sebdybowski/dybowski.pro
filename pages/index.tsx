import Heading from '../components/Heading/Heading'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import clsx from 'clsx'
import styles from './Index.module.css'
import Container from '@/components/Container/Container'
import { Fragment } from 'react'

const Home: NextPage = () => (
  <Fragment>
    <Head>
      <title>{`Seb Dybowski's portfolio`}</title>
      <meta name="description" content="Seb Dybowski's portfolio" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <Container className={styles.Hero}>
      <div className={clsx(styles.Column, styles['Column--vcentered'])}>
        <div>
          <Heading level={2}>{`Hi, I'm Seb`}</Heading>
          <Heading level={1} serif brand>Software Engineer & UI/UX Designer</Heading>
          <Heading level={2}>Nice to meet you!</Heading>
        </div>
      </div>
      <div className={styles.Column}>
        <Image
          src='/seb2.png'
          alt='Hero background'
          layout='responsive'
          width={100}
          height={100}
          objectFit='contain'
        />
      </div>
    </Container>
    <Container className={styles.Skills}>
      <Heading level={2} section serif>Skills</Heading>
    </Container>
    <Container className={styles.Contact}>
      <Heading level={2} section serif>Contact</Heading>
    </Container>
    <Footer />
  </Fragment>
)

export default Home
