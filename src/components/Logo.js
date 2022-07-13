import React from 'react'
import smoothie from '../images/smoothie.svg'
import rPlant from '../images/Vector-6.svg'
import lPlant from '../images/Vector-7.svg'

const Logo = () => {
  return (
    <div className='flex flex-col justify-center items-center relative p-2'>
        <div className='flex justify-center items-center absolute top-0 left-16'>
            <img src={rPlant} alt="" />
            <img src={lPlant} alt="" />
        </div>
        <img src={smoothie} alt="" />
    </div>
  )
}

export default Logo