import React from 'react'
import bluesmooth from '../images/blue-ban-smooth.svg'
import cucumbersmoothie from '../images/cucumbersmoothie.svg'
import mangoalmond from '../images/mangoalmond.svg'
import DrinkItem from './DrinkItem'

const DrinkSection = ({ refProp }) => {
  return (
    <div ref={refProp} className='min-h-screen flex flex-col justify-center items-center z-10'>
        <div className='mb-5'>
            <h1 className='text-3xl font-bold text-center rounded-lg z-10'>Specialties</h1>
            <div className='bg-[#DD2D50] h-2 rounded-full animate-growToRight'></div>
        </div>
        <h1 
            className='text-3xl font-bold text-center z-10'
            >
                <span className='animate-growAndFadeIn'>Fresh </span> 
                <span className='animate-growAndFadeIn1'>Ingredients </span>
                <span className='animate-growAndFadeIn2'>Every </span> 
                <span className='animate-growAndFadeIn3'>Time. </span>
        </h1>
        <DrinkItem 
            image={bluesmooth}
            color={'#CEDBEB'}
            darkColor={'#3168AA'}
            animation={'animate-shadowInBlue'}
            title={'Blueberry Banana Smoothie'}
            ingredients={['2 Bananas', '1 Cup of Blueberries', '2 Cups Of Your choice of milk']}
        />
        <DrinkItem 
            image={cucumbersmoothie}
            color={'#E2FBC4'}
            darkColor={'#889F34'}
            animation={'animate-shadowInGreen'}
            title={'Cucumber Smoothie'}
            ingredients={['1 Cucumber', '1 Avacado', '1 Cup of kale', '2 Cups Of Your choice of milk']}
        />
        <DrinkItem 
            image={mangoalmond}
            color={'#FDF3D8'}
            darkColor={'#FEAC00'}
            animation={'animate-shadowInYellow'}
            title={'Mango Almond Smoothie'}
            ingredients={['2 Mangoes', '1 Cup of Almonds', '2 Cups Of Your choice of milk']}
        />
    </div>
  )
}

export default DrinkSection