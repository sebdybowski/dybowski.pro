import Heading from '../components/Heading/Heading'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
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
      <div className={styles.Column}>
        <Heading level={3}>{`Hi, I'm Seb`}</Heading>
        <Heading level={1}>Software Engineer & UI/UX Designer</Heading>
        <Heading level={3}>Nice to meet you!</Heading>
      </div>
      <div className={styles.Column}>
        <Image
          src='/seb.png'
          alt='Hero background'
          layout='responsive'
          width={100}
          height={100}
          objectFit='contain'
        />
      </div>
    </Container>
    {/* <Footer /> */}
  </Fragment>
)

export default Home
