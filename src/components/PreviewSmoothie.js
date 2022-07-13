import React from 'react'

const PreviewSmoothie = ({image, color, darkColor, name, price}) => {
  return (
    <div className={`text-center shadow-lg`}>
        <div 
            style={{backgroundColor: color, borderColor: darkColor}}
            className={`border-b-4 rounded-xl flex flex-col justify-end items-center gap-5 relative tablet:w-56 tablet:h-64 w-36 h-64 tablet:pb-8 pb-2 tablet:px-6`}>
            <h1 className='text-xl font-bold'>{name}</h1>
            <h1 className='text-2xl font-bold text-[#DD2D50]'>${price}</h1>
            <div 
                style={{borderColor: darkColor}}
                className={`absolute tablet:-top-16 tablet:left-10 -top-10 overflow-hidden rounded-full w-36 h-36 flex justify-center items-center border-4 `}><img className='max-w-none' src={image} alt="" /></div>
        </div>
    </div>
  )
}

export default PreviewSmoothie