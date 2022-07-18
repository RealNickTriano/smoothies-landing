import React from 'react'
import { FaCheck } from "react-icons/fa";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const SubmittedSuccess = () => {
  return (
    <AnimationOnScroll 
        animateIn="animate__bounceIn"
        initiallyVisible={true}
        animatePreScroll={false}
        animateOnce={true}
    >
        <div className='flex justify-center items-center gap-5'>
            <FaCheck 
                className='border-2 rounded-full p-1 border-green-500 text-white bg-green-500'
                size={45} 
            />
            <h1 className='text-3xl font-bold text-green-500'>Thank You</h1>
        </div>
    </AnimationOnScroll>
  )
}

export default SubmittedSuccess