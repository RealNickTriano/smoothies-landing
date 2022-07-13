import React from 'react'

const Button = ({ text }) => {
  return (
    <button className='flex justify-center items-center px-6 py-2 rounded-full bg-[#DD2D50] shadow-lg shadow-[#DD2D50]'>
        <h1 className='text-white capitalize font-bold'>
            {text}
        </h1>
    </button>
  )
}

export default Button