import React, { FC } from 'react'


const Button:FC<{text: string}> = ({ text }) => {
 
  return (

    <button className='bg-red-400 text-white font-medium px-8 py-4 rounded-full  hover:scale-105 hover:shadow-lg duration-300'>{text}</button>
)
}

export default Button;