import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Container.module.scss';

interface ContainerProps {
  children: ReactNode,
  className?: string,
  id?: string,
}

const Container: FC<ContainerProps> = ({ children, className, id }) => (
  <section id={id} className={clsx(styles.Container, className && className)} data-testid="Container">
    {children}
  </section>
);

export default Container;
