import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './Navbar.module.css';

const SECTIONS = {
  HOME: { title: 'home', link: '#home' },
  SKILLS: { title: 'skills', link: '#skills' },
  CONTACT: { title: 'contact', link: '#contact' }
};

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string>('#home');
  const [isNavbarBlurred, setNavbarBlur] = useState<boolean>(false);

  useEffect(() => {
    const { hash } = document.location;

    if (hash) setActiveLink(hash);

    const onScroll = () => {
      const scroll = document.getElementsByTagName('html')[0].scrollTop;
      const sectionHeight = document.getElementById('skills')?.scrollHeight;

      if (sectionHeight) {
        const offset = sectionHeight * 0.3;
        let newHash;

        if (scroll >= (sectionHeight * 2 - offset)) {
          const { link } = SECTIONS.CONTACT;
          newHash = link;
        } else if (scroll >= (sectionHeight - offset)) {
          const { link } = SECTIONS.SKILLS;
          newHash = link;
        } else {
          const { link } = SECTIONS.HOME;
          newHash = link;
        }

        if (scroll > 0 && !isNavbarBlurred) setNavbarBlur(true);
        if (scroll === 0 && isNavbarBlurred) setNavbarBlur(false);

        setActiveLink(newHash);
        document.location.hash = newHash;
      }
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [setActiveLink, setNavbarBlur, isNavbarBlurred]);

  return (
    <nav className={clsx(styles.Navbar, isNavbarBlurred && styles['Navbar--scroll'])} data-testid="Navbar">
      <div className={clsx(styles.Line, styles['Line--side'])} />
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
        {
          Object.values(SECTIONS).map(({ title, link }) => (
            <li
              className={clsx(link === activeLink && styles.active)}
              key={title}
            >
              <a href={link}>{title}</a>
            </li>
          ))
        }
      </ul>
      <div className={clsx(styles.Line, styles['Line--side'])} />
      <div className={styles.ExternalLinks}>
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
      </div>
    </nav>
  )
};

export default Navbar;
