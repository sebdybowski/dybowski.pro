import Head from 'next/head';

import { Hero, Skills } from '../modules';
import { Footer } from '../components';

import type { NextPage } from 'next';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Seb Dybowski - Software Engineer & UI/UX Designer</title>
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Seb Dybowski - Software Engineer & UI/UX Designer" />
    </Head>
    <Hero/>
    <Skills/>
    <Footer/>
  </div>
);

export default Home;
