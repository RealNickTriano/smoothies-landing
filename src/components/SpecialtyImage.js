import React from 'react'

const SpecialtyImage = ({ color, image}) => {
  return (
    <div 
        className={`border-blue-600 border-4 overflow-hidden rounded-full w-64 h-64 flex justify-center items-center`}>
            <img className='max-w-none w-[140%] h-[150%]' src={image} alt="" />
    </div>
  )
}

export default SpecialtyImage