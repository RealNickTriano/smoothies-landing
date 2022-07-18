import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Card = ({ text, image, position, rotation, width, height, margin }) => {
  return (
    <AnimationOnScroll
      animateIn='animate__bounceIn'
      animateOnce={true}
      animatePreScroll={false}
    >
      <div className={`flex flex-col justify-center items-center h-80 ${margin} relative`}>
          <img className={`${rotation} ${width} ${height} border-4 border-[#DD2D50] rounded-xl`} src={image} alt="" />
          <h1 className={`w-96 text-3xl text-center text-[#DD2D50] uppercase absolute ${position}`}>{text}</h1>
      </div>
    </AnimationOnScroll>
  )
}

export default Card