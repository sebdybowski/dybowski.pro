import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => (
  <footer className={styles.Footer} data-testid="Footer">
    <div className={styles.Line} />
    {/* <Image
      src="/footer-background.svg"
      alt="footer background"
      layout='fill'
      objectPosition='bottom'
    /> */}
    <div className={styles.Content}>
      <span className={styles.Year}>2022</span>
      <span className={styles.Caption}>Built with <Link href='https://nextjs.org/'>Next.js</Link></span>
    </div>
    <div className={styles.Line} />
  </footer>
);

export default Footer;
