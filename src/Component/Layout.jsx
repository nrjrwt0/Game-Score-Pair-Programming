import React, { useState } from 'react'
import { Input } from './Input';
import { Keypad } from './Keypad';
import { Scores } from './Scores';
import styles from './layout.module.css';

export const Layout = () => {
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  const [input, setInput] = useState('');

  const handleMinMaxValues = () => {
    if (minValue === '' || +minValue > +input) {
      setMinValue(input);
    }
    if (maxValue === '' || +maxValue < +input) {
      setMaxValue(input);
    }
    setInput('');
  }
  return (
    <div className={styles.mainDiv}>
      <div className={styles.minMax}>
        <Scores textContent="MIN" finalValue={minValue} />
        <Scores textContent="MAX" finalValue={maxValue} />
      </div>
      <Input input={input} setInput={setInput} />
      <div >
        <Keypad setInput={setInput} />
      </div>
      <div>
        <button onClick={handleMinMaxValues}>Enter</button>
      </div>
    </div>
  )
}
