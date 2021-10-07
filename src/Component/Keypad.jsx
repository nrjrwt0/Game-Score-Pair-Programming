import React from 'react'
import { Button } from './Button';

export const Keypad = ({setInput}) => {
  const nums = new Array(9).fill(0).map((el,index) => index+1);
  nums.push(0);

  
  const handleAddNumber = (value) => {
    setInput(prev => prev+value)
  }

  return (
    <div>
      {nums.map((el) => <Button key={el} value={el} handleAddNumber={handleAddNumber}/>)}
    </div>
  )
}
