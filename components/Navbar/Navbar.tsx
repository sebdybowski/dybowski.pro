import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import styles from './Navbar.module.css';

const Navbar = () => (
  <div className={styles.Navbar} data-testid="Navbar">
    <div className={styles.Line} />
    <Link href="/">
      <a className={styles.Logo}>
        <div className={styles.IconWrapper}>
          <FontAwesomeIcon
            icon={faTerminal}
            size='1x'
            className={styles.Icon}
          />
        </div>
        <span>seb<span className={styles.Surname}>dybowski</span></span>
      </a>
    </Link>
    <div className={styles.Line} />
    <ul className={styles.Links}>
      <li>home</li>
      <li>skills</li>
      <li>contact</li>
    </ul>
    <div className={styles.Line} />
  </div>
);

export default Navbar;
