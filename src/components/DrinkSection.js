import React from 'react'
import SpecialtyImage from './SpecialtyImage'
import bluesmooth from '../images/blue-ban-smooth.svg'

const DrinkSection = () => {
  return (
    <div className='min-h-screen'>
        <h1 className='text-3xl font-bold text-center'>Specialties</h1>
        <div className='flex justify-center items-center gap-12'>
            <SpecialtyImage 
                color={'blue'}
                image={bluesmooth}
            />
            <div className='flex flex-col justify-center items-start gap-5 bg-[#CEDBEB] p-10 rounded-lg z-10 animate-shadowIn'
                style={{boxShadow: '20px 20px 0px rgba(49,104,170,1)'}}
            >
                <h1 
                    className='text-3xl font-bold text-center'
                >
                    Fresh Ingredients Every Time.
                </h1>
                <div className='flex flex-col justify-center items-start'>
                    <h1 
                        className='text-2xl font-bold text-left'
                    >
                        2 Bananas
                    </h1>
                    <h1 
                        className='text-2xl font-bold text-left'
                    >
                        1 Cup Of Blueberries
                    </h1>
                    <h1 
                        className='text-2xl font-bold text-left'
                    >
                        2 Cups Of Your Choice Of Milk
                    </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DrinkSection