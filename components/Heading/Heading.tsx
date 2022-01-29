import React, {ReactNode, createElement} from 'react';
import clsx from 'clsx';
import styles from './Heading.module.css';

type HeadingProps = {
  children: ReactNode,
  serif?: boolean,
  brand?: boolean,
  level?: 1 | 2 | 3 | 4 | 5 | 6
};

const Heading = ({ level = 1, children, serif = false, brand = false }: HeadingProps) => createElement(
  `h${level}`,
  {
    className: clsx(
      styles.Heading,
      serif && styles['Heading--serif'],
      brand && styles['Heading--brand']
    ),
    ['data-testid']: 'Heading'
  },
  children
);

export default Heading;
