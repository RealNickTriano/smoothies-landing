import React from 'react'
import bigLogo from '../images/big-logo.svg'
import Benefits from './Benefits'
import Button from './Button'

const Details = () => {
  return (
    <div className='flex flex-col justify-center items-start'>
        <div className='ml-16'><img src={bigLogo} alt="big logo" /></div>
        <p className='font-medium my-12 w-96'>Smoothies are so healthy, refreshing and the perfect way to pack some extra fruit and veggies into your diet
        </p>
        <Button 
            text='Order Now'
        />
        <div className='ml-64'>
            <Benefits />
        </div>
    </div>
  )
}

export default Details