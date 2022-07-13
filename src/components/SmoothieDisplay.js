import React from 'react'
import bowl from '../images/bowl.svg'

const SmoothieDisplay = () => {
  return (
    <div className='overflow-hidden relative h-96 w-96 rounded-full flex justify-center items-center shadow-xl mt-24'>
        <img className='absolute max-w-none h-[150%] mr-7' src={bowl} alt="" />
    </div>
  )
}

export default SmoothieDisplay