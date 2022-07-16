import React from 'react'
import Card from './Card'
import ingredImage from '../images/ingedientsimage.jpg'
import staffImage from '../images/staff.png'
import smoothiesImage from '../images/smoothies.jpg'

const AboutSection = ({ refProp }) => {
  return (
    <div ref={refProp} className='flex flex-col justify-center items-center mb-16 min-h-screen'>
        <div className='mb-5'>
            <h1 className='text-3xl font-bold text-center rounded-lg z-10'>About Us</h1>
            <div className='bg-[#DD2D50] h-2 rounded-full animate-growToRight'></div>
        </div>

        <p className='text-xl w-1/2 text-center font-medium mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam modi repellendus eius sunt alias saepe ab, laboriosam amet provident est.</p>
        {/* 3 Cards */}
        <div className='text-xl text-center font-bold flex justify-center items-center'>
            <Card 
                text={'We make everything fresh'}
                position={'-bottom-10'}
                rotation={'-rotate-90'}
                width={'w-[224px]'}
                height={'h-[332px]'}
                image={ingredImage}
            />
            <Card 
                text={'Friendly Staff'}
                position={'-bottom-1'}
                rotation={''}
                width={'w-[332px]'}
                height={'h-[224px]'}
                margin={'ml-24'}
                image={staffImage}
            />
            <Card 
                text={'Great Prices'}
                position={'-bottom-1'}
                width={'w-[332px]'}
                height={'h-[224px]'}
                margin={'ml-10'}
                image={smoothiesImage}
            />
        </div>
    </div>
  )
}

export default AboutSection