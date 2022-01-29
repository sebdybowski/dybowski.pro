import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';

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
      <span>2022</span>
      <span>Built with NEXT.JS</span>
    </div>
    <div className={styles.Line} />
  </footer>
);

export default Footer;
