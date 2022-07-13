import React from 'react'
import bigLogo from '../images/big-logo.svg'
import Benefits from './Benefits'
import Button from './Button'

const Details = () => {
  return (
    <div className='flex flex-col justify-center desktop:items-start items-center desktop:mt-0 mt-12'>
        <div className='desktop:ml-16 flex justify-center items-center'><img className='w-[75%] desktop:w-[100%]' src={bigLogo} alt="big logo" /></div>
        <p className='font-medium my-12 desktop:w-96 w-64'>Smoothies are so healthy, refreshing and the perfect way to pack some extra fruit and veggies into your diet
        </p>
        <Button 
            text='Order Now'
        />
        <div className='desktop:ml-64 desktop:mt-0 mt-12'>
            <Benefits />
        </div>
    </div>
  )
}

export default Details