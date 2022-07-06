import React, { ButtonHTMLAttributes, FC, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import styles from './Button.module.scss';

import type { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ButtonProps {
  children: string,
  icon?: IconProp,
  outline?: boolean,
  primary?: boolean
  inverted?: boolean
}

const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children, icon, type = 'button', outline = false, primary = false, inverted = false,
}) => (
  <button
    className={clsx(
      styles.Button,
      outline && styles['Button--outlined'],
      primary && styles['Button--primary'],
      inverted && styles['Button--inverted'],
    )}
    type={type}
    data-testid="Button"
    aria-label={children}
  >
    {
      icon ?
      <Fragment>
        <FontAwesomeIcon
          icon={icon}
          size='1x'
          className={styles.Button__Icon}
        />
        <span className={styles.Button__Text}>{children}</span>
      </Fragment> :
        children
    }
  </button>
);

export default Button;
