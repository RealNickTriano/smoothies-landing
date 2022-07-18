import React from 'react'
import SpecialtyImage from './SpecialtyImage'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const DrinkItem = ({ image, color, darkColor, title, ingredients, animation, decoration, width }) => {
  return (
    <div className='mt-16 mb-8 flex justify-center items-center gap-12 animate-riseUpFadeIn'>
            <SpecialtyImage 
                color={darkColor}
                image={image}
                width={width}
            />
            {/* <div className='bg-gradient-to-r from-[#3168AA] via-white to-[#3168AA] p-1 z-10'> */}
            <AnimationOnScroll 
                animateIn="animate__bounceIn"
                animateOnce={true}
                animatePreScroll={false}
            >
                <div className={`min-w-[30rem] flex flex-col justify-center items-start gap-5 p-10 z-10`}
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
                </AnimationOnScroll>
            {/* </div> */}
        </div>
  )
}

export default DrinkItem