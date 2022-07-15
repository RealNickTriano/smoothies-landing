import React from 'react'

const SpecialtyImage = ({ color, image}) => {
  return (
    <div 
      style={{borderColor: color}}  
        className={`border-4 overflow-hidden rounded-full w-64 h-64 flex justify-center items-center shadow-lg z-10`}>
            <img className='max-w-none w-[140%] h-[150%]' src={image} alt="" />
    </div>
  )
}

export default SpecialtyImage