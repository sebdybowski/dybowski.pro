import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.Footer} data-testid="Footer">
    <div className={styles.Content}>
      <span className={styles.Year}>
        20<span className={styles.Year__End}>22</span>
      </span>
      <span className={styles.Caption}>
        Built with <a href='https://nextjs.org/' target="_blank">Next.js</a>
      </span>
    </div>
  </footer>
);

export default Footer;
