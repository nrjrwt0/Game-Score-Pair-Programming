import React from 'react'

export const Scores = ({textContent,finalValue}) => {
  return (
    <div>
      <div>
        {finalValue}
      </div>
      <h1>{textContent}</h1>
    </div>
  )
}
