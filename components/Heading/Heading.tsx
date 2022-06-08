import { ReactNode, createElement } from 'react';
import clsx from 'clsx';

import styles from './Heading.module.css';

type HeadingProps = {
  children: ReactNode,
  serif?: boolean,
  brand?: boolean,
  level?: 1 | 2 | 3 | 4 | 5 | 6,
  section?: boolean
};

const Heading = ({
  level = 1,
  children,
  serif = false,
  brand = false,
  section = false,
}: HeadingProps) => createElement(
  `h${level}`,
  {
    className: clsx(
      styles.Heading,
      serif && styles['Heading--serif'],
      brand && styles['Heading--brand'],
      section && styles['Heading--section'],
    ),
    ['data-testid']: 'Heading',
  },
  children,
);

export default Heading;
