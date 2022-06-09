import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Column.module.scss';

interface ColumnProps {
  children: ReactNode,
  className?: string,
  vCenter?: boolean,
  hCenter?: boolean,
  wide?: boolean,
  half?: boolean,
}

const Column: FC<ColumnProps> = ({ children, vCenter = false, hCenter = false, wide = false, half = false, className }) => (
  <div className={clsx(
    styles.Column,
    className && className,
    vCenter && styles['Column--vCenter'],
    hCenter && styles['Column--hCenter'],
    wide && styles['Column--wide'],
    half && styles['Column--half'],
  )} data-testid="Column">
    {children}
  </div>
);

export default Column;
