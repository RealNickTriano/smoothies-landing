import React from 'react'
import SpecialtyImage from './SpecialtyImage'

const DrinkItem = ({ image, color, darkColor, title, ingredients, animation, decoration, width }) => {
  return (
    <div className='my-16 flex justify-center items-center gap-12 animate-riseUpFadeIn'>
            <SpecialtyImage 
                color={darkColor}
                image={image}
                width={width}
            />
            {/* <div className='bg-gradient-to-r from-[#3168AA] via-white to-[#3168AA] p-1 z-10'> */}
                <div className={`min-w-[30rem] flex flex-col justify-center items-start gap-5 p-10 z-10 ${animation}`}
                    style={{boxShadow: `20px 20px 0px ${darkColor}`, backgroundColor: color}}
                >
                <h1 
                    className={`text-3xl font-bold text-center underline ${decoration}`}
                >
                    {title}
                </h1>
                    <div className='flex flex-col justify-center items-start'>
                        {
                            ingredients.map((item, index) => {
                                return (
                                    <h1 
                                        className='capitalize text-2xl font-bold text-left'
                                    >
                                        {item}
                                    </h1>
                                )
                            })
                        }
                    </div>
                </div>
            {/* </div> */}
        </div>
  )
}

export default DrinkItem