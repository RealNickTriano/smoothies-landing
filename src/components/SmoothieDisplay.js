import React from 'react'
import bowl from '../images/bowl.svg'
import cherries from '../images/cherries.svg'

const SmoothieDisplay = () => {
  return (
    <div className='relative'>
      <div className='overflow-hidden relative h-96 w-96 tablet:flex hidden rounded-full  justify-center items-center shadow-xl mt-24 z-10'>
          <img className='absolute max-w-none h-[150%] mr-7' src={bowl} alt="" />
      </div>
      <img className='absolute -right-20 -bottom-10 max-w-full z-0 hidden laptop:block' src={cherries} alt="" />
    </div>
  )
}

export default SmoothieDisplay

