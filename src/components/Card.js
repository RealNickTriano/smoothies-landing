import React from 'react'

const Card = ({ text, image, position, rotation, width, height, margin }) => {
  return (
    <div className={`flex flex-col justify-center items-center h-80 ${margin} relative`}>
        <img className={`${rotation} ${width} ${height} border-4 border-[#DD2D50] rounded-xl`} src={image} alt="" />
        <h1 className={`w-96 text-3xl text-center text-[#DD2D50] uppercase absolute ${position}`}>{text}</h1>
    </div>
  )
}

export default Card