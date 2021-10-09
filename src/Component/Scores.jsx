import React from 'react';
import styles from './layout.module.css';

export const Scores = ({textContent,finalValue}) => {
  return (
    <div>
      <div className={styles.finValBox}>
        {finalValue}
      </div>
      <h1>{textContent}</h1>
    </div>
  )
}
