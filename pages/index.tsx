import { Hero, Skills } from '../modules';
import { Footer } from '../components';

import type { NextPage } from 'next';

const Home: NextPage = () => (
  <div>
    <Hero/>
    <Skills/>
    <Footer/>
  </div>
);

export default Home;
