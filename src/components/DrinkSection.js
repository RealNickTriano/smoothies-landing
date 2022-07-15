import React from 'react'
import SpecialtyImage from './SpecialtyImage'
import bluesmooth from '../images/blue-ban-smooth.svg'

const DrinkSection = ({ refProp }) => {
  return (
    <div ref={refProp} className='min-h-screen flex flex-col justify-center items-center z-10'>
        <h1 className='text-3xl font-bold text-center border-b-8 border-red-500 rounded-lg mb-5 z-10'>Specialties</h1>
        <h1 
            className='text-3xl font-bold text-center z-10'
            >
                Fresh Ingredients Every Time.
        </h1>
        <div className='my-16 flex justify-center items-center gap-12 animate-riseUpFadeIn'>
            <SpecialtyImage 
                color={'blue'}
                image={bluesmooth}
            />
            {/* <div className='bg-gradient-to-r from-[#3168AA] via-white to-[#3168AA] p-1 z-10'> */}
                <div className='flex flex-col justify-center items-start gap-5 bg-[#CEDBEB] p-10 z-10 animate-shadowIn'
                    style={{boxShadow: '20px 20px 0px rgba(49,104,170,1)'}}
                >
                <h1 
                    className='text-3xl font-bold text-center underline decoration-[#3168AA]'
                >
                    Blueberry Banana Smoothie
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
            {/* </div> */}
        </div>
    </div>
  )
}

export default DrinkSection