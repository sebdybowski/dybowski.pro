import React, { FC } from 'react';
import styles from './Paragraph.module.css';

interface ParagraphProps {}

const Paragraph: FC<ParagraphProps> = () => (
  <div className={styles.Paragraph} data-testid="Paragraph">
    Paragraph Component
  </div>
);

export default Paragraph;
