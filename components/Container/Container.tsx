import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Container.module.css';

interface ContainerProps {
  children: ReactNode,
  className?: string
}

const Container: FC<ContainerProps> = ({ children, className }) => (
  <div className={clsx(styles.Container, className)} data-testid="Container">
    {children}
  </div>
);

export default Container;
