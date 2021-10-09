import React from 'react';
import styles from './layout.module.css';

export const Input = ({input,setInput}) => {
  return (
    <div className={styles.mainInput}>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
    </div>
  )
}