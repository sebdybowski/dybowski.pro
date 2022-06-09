import React, { FC } from 'react';

import styles from './Paragraph.module.scss';

type ParagraphProps = { children: string };

const Paragraph: FC<ParagraphProps> = ({ children }) => (
  <p className={styles.Paragraph} data-testid="Paragraph">
    {children}
  </p>
);

export default Paragraph;
