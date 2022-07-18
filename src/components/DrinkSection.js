import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import bluesmooth from '../images/blue-ban-smooth.svg'
import cucumbersmoothie from '../images/cucumbersmoothie.svg'
import mangoalmond from '../images/mangoalmond.svg'
import DrinkItem from './DrinkItem'

const DrinkSection = ({ refProp }) => {
  return (
    <div ref={refProp} className='min-h-screen flex flex-col justify-center items-center z-10'>
        <div className='mb-5'>
            <AnimationOnScroll
               animateIn='animate__fadeInDown'
               animateOnce={true} 
            >
            <h1 className='text-3xl font-bold text-center rounded-lg z-10'>Specialties</h1>
            </AnimationOnScroll>
            <AnimationOnScroll
               animateIn='growToRight'
               animateOnce={true} 
            >
                <div className='bg-[#DD2D50] h-2 rounded-full'></div>
            </AnimationOnScroll>
        </div>
        <AnimationOnScroll
            animateIn='animate__fadeInDown'
            animateOnce={true} 
        >
            <h1 
                className='text-3xl font-bold text-center z-10'
            >
                Fresh Ingredients Every Time.
            </h1>
        </AnimationOnScroll>
        <DrinkItem 
            image={bluesmooth}
            color={'#CEDBEB'}
            darkColor={'#3168AA'}
            decoration={'decoration-[#3168AA]'}
            width={'w-[140%]'}
            animation={'animate-shadowInBlue'}
            title={'Blueberry Banana Smoothie'}
            ingredients={['2 Bananas', '1 Cup of Blueberries', '2 Cups Of Your choice of milk']}
        />
        <DrinkItem 
            image={cucumbersmoothie}
            color={'#E2FBC4'}
            darkColor={'#889F34'}
            decoration={'decoration-[#889F34]'}
            width={'w-[150%]'}
            animation={'animate-shadowInGreen'}
            title={'Cucumber Smoothie'}
            ingredients={['1 Cucumber', '1 Avacado', '1 Cup of kale', '2 Cups Of Your choice of milk']}
        />
        <DrinkItem 
            image={mangoalmond}
            color={'#FDF3D8'}
            darkColor={'#FEAC00'}
            decoration={'decoration-[#FEAC00]'}
            width={'w-[150%]'}
            animation={'animate-shadowInYellow'}
            title={'Mango Almond Smoothie'}
            ingredients={['2 Mangoes', '1 Cup of Almonds', '2 Cups Of Your choice of milk']}
        />
    </div>
  )
}

export default DrinkSection