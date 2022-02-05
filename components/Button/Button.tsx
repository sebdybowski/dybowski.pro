import React, { ButtonHTMLAttributes, FC, Fragment, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './Button.module.css';
import clsx from 'clsx';

type ButtonProps = {
  children: ReactNode,
  icon?: IconProp,
  outline?: boolean
}

const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children, icon, type = 'button', outline = false
}) => (
  <button
    className={clsx(
      styles.Button,
      outline && styles['Button--outlined']
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
          className={styles['Button__Icon']}
        />
        {children}
      </Fragment> :
      children
    }
  </button>
);

export default Button;
