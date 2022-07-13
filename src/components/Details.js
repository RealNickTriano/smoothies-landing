import React from 'react'
import bigLogo from '../images/big-logo.svg'

const Details = () => {
  return (
    <div className='flex flex-col justify-center items-start'>
        <div className='ml-16'><img src={bigLogo} alt="big logo" /></div>
        <p className='font-md my-12 w-96'>Smoothies are so healthy, refreshing and the perfect way to pack some extra fruit and veggies into your diet
        </p>
    </div>
  )
}

export default Details