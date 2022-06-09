import React, { FC } from 'react';

import styles from './TemplateName.module.scss';

interface TemplateNameProps {}

const TemplateName: FC<TemplateNameProps> = () => (
  <div className={styles.Hero} data-testid="TemplateName">
    TemplateName Component
  </div>
);

export default TemplateName;
