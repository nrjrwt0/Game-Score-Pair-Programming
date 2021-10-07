import React from 'react';

export const Button = ({value,handleAddNumber}) => {
  return (
    <button onClick={() => handleAddNumber(value)}>
      {value}
    </button>
  )
}