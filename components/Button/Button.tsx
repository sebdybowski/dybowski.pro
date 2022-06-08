import React, { ButtonHTMLAttributes, FC, Fragment, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import styles from './Button.module.css';

import type { IconProp } from '@fortawesome/fontawesome-svg-core';

type ButtonProps = {
  children: ReactNode,
  icon?: IconProp,
  outline?: boolean,
  primary?: boolean
};

const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children, icon, type = 'button', outline = false, primary = false,
}) => (
  <button
    className={clsx(
      styles.Button,
      outline && styles['Button--outlined'],
      primary && styles['Button--primary'],
    )}
    type={type}
    data-testid="Button"
  >
    {
      icon ?
      <Fragment>
        <FontAwesomeIcon
          icon={icon}
          size='1x'
          className={styles.Button__Icon}
        />
        {children}
      </Fragment> :
        children
    }
  </button>
);

export default Button;
