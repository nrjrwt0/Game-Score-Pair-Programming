import React from 'react'

export const Input = ({input,setInput}) => {
  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
    </div>
  )
}