import React, { useState } from 'react'
import { Input } from './Input';
import { Keypad } from './Keypad';
import { Scores } from './Scores'

export const Layout = () => {
  const [minValue,setMinValue] = useState('');
  const [maxValue,setMaxValue] = useState(''); 

  const [input,setInput] = useState('');

  const handleMinMaxValues = () => {
    if(minValue === '' || +minValue > +input){
      setMinValue(input);
    }
    if(maxValue === '' || +maxValue < +input){
      setMaxValue(input);
    }
    setInput('');
  }
  return (
    <>
      <Scores textContent="MIN" finalValue={minValue}/>
      <Scores textContent="MAX" finalValue={maxValue}/>
      <Input input={input} setInput={setInput}/>
      <div>
        <Keypad setInput={setInput}/>
      </div>
      <div>
        <button onClick={handleMinMaxValues}>Enter</button>
      </div>
    </>
  )
}
