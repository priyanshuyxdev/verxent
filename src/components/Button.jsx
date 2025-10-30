import React from 'react'

const Button = ({label,classname,onClick}) => {
  return (
    <button 
    className={`cursor-pointer text-center ${classname}`}
    onClick={onClick}>{label}</button>
  )
}

export default Button