import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.Navbar} data-testid="Navbar">
    <div className={styles.SideLine} />
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
      <li className={styles.active}>home</li>
      <li>skills</li>
      <li>contact</li>
    </ul>
    <div className={styles.Line} />
    <div className={styles.ExternalLinks}>
      <div className={styles.Line} />
      <ul className={styles.Items}>
        <li>
          <Link href='https://github.com/sebdybowski'>
            <a target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                size='1x'
                className={styles.Icon}
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href='https://www.linkedin.com/in/sebastian-dybowski/'>
            <a target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faLinkedin}
                size='1x'
                className={styles.Icon}
              />
            </a>
          </Link>
        </li>
      </ul>
      <div className={styles.Line} />
    </div>
  </nav>
);

export default Navbar;
