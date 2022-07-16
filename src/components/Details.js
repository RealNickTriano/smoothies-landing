import React from 'react'
import bigLogo from '../images/big-logo.svg'
import Benefits from './Benefits'
import Button from './Button'
import { SiDoordash, SiGrubhub, SiUbereats, SiPostmates } from "react-icons/si";

const Details = () => {
  return (
    <div className='font-montserrat flex flex-col justify-center desktop:items-start items-center desktop:mt-0 mt-12'>
        <div className='desktop:ml-16 flex justify-center items-center'><img className='w-[75%] desktop:w-[100%]' src={bigLogo} alt="big logo" /></div>
        <p className='font-medium my-12 desktop:w-96 w-64'>Smoothies are so healthy, refreshing and the perfect way to pack some extra fruit and veggies into your diet
        </p>
        <div>
        <Button 
            text='Order Now'
        />
        <div className='flex justify-center items-center gap-5 mt-2'>
          <a 
            href='https://www.doordash.com/'
            target="_blank"
            className='hover:text-[#DD2D50] hover:cursor-pointer'
          ><SiDoordash size={25}/></a>
          <a
            href='https://www.grubhub.com/'
            target="_blank"
            className='hover:text-[#DD2D50] hover:cursor-pointer'
          ><SiGrubhub size={50}/></a>
          <a
            href='https://www.ubereats.com/'
            target="_blank"
            className='hover:text-[#DD2D50] hover:cursor-pointer'
          ><SiUbereats size={30}/></a>
          <a
            href='https://postmates.com/'
            target="_blank"
            className='hover:text-[#DD2D50] hover:cursor-pointer'
          ><SiPostmates size={40}/></a>
        </div>
        </div>
        <div className='desktop:ml-64 desktop:mt-0 mt-12'>
            <Benefits />
        </div>
    </div>
  )
}

export default Details