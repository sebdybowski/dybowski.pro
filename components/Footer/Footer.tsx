import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.Footer} data-testid="Footer">
    <div className={styles.Line} />
    <div className={styles.Content}>
      <span>2022</span>
      <span>Built with NEXT.JS</span>
    </div>
    <div className={styles.Line} />
  </footer>
);

export default Footer;
