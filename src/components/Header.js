import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Header = ({ text }) => {
  return (
    <div className='mb-5'>
        <AnimationOnScroll
            animateIn='animate__fadeInDown'
            animateOnce={true} 
            animatePreScroll={false}
        >
            <h1 className='text-3xl font-bold text-center rounded-lg z-10'>{text}</h1>
        </AnimationOnScroll>
        <div className='bg-[#DD2D50] h-2 rounded-full animate-growToRight'></div>
    </div>
  )
}

export default Header