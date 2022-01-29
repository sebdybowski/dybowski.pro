import React, {ReactNode, createElement} from 'react';
import styles from './Heading.module.css';

type HeadingProps = {
  children: ReactNode,
  level?: 1 | 2 | 3 | 4 | 5 | 6
};

const Heading = ({ level = 1, children }: HeadingProps) => createElement(
  `h${level}`,
  { className: styles.Heading, ['data-testid']: 'Heading'},
  children
);

export default Heading;
