import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const SpecialtyImage = ({ color, image, width}) => {
  return (
    <>
      <AnimationOnScroll
        animateIn="animate__backInLeft"
        animateOnce={true}
      >
        
        <div 
          style={{borderColor: color}}  
            className={`border-4 overflow-hidden rounded-full w-64 h-64 flex justify-center items-center shadow-lg z-10`}>
                <img className={`max-w-none ${width} h-[200%]`} src={image} alt="" />
        </div>
      </AnimationOnScroll>
    </>
  )
}

export default SpecialtyImage