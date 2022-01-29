import React, {ReactNode} from 'react';
import styles from './Heading.module.css';

type HeadingProps = { children: ReactNode };

const Heading = ({ children }: HeadingProps) => (
  <div className={styles.Heading} data-testid="Heading">
    {children}
  </div>
);

export default Heading;
