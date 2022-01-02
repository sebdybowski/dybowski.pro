import React from 'react';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => (
  <div className={styles.Navbar} data-testid="Navbar">
    <div className={styles.Line} />
    <FontAwesomeIcon
      icon={faTerminal}
      size='xs'
      className={styles.Icon}
    />
    <div className={styles.Logo}>sebdybowski</div>
    <div className={styles.Line} />
    <div className={styles.Links}>Links</div>
    <div className={styles.Line} />
  </div>
);

export default Navbar;
