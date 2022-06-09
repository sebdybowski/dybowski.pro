import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Container.module.scss';

interface ContainerProps {
  children: ReactNode,
  className?: string,
  id?: string,
  fluid?: boolean,
  section?: boolean
}

const Container: FC<ContainerProps> = ({
  children, className, id = '', fluid = false,
  section = false,
}) => (
  <section id={id} className={clsx(
    styles.Container,
    className && className,
    fluid && styles['Container--fluid'],
    section && styles['Container--section'],
  )} data-testid="Container">
    {children}
  </section>
);

export default Container;
