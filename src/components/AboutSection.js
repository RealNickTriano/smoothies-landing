import React from 'react'
import Card from './Card'
import ingredImage from '../images/ingedientsimage.jpg'
import staffImage from '../images/staff.png'
import smoothiesImage from '../images/smoothies.jpeg'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Logo from './Logo'

const AboutSection = ({ refProp }) => {
  return (
    <div ref={refProp} className='flex flex-col justify-center text-center items-center mb-16 min-h-screen'>
        <div className='mb-5'>
            <AnimationOnScroll
               animateIn='animate__fadeInDown'
               animateOnce={true} 
               animatePreScroll={false}
            >
                <h1 className='text-3xl font-bold text-center rounded-lg z-10'>About Us</h1>
            </AnimationOnScroll>
            <div className='bg-[#DD2D50] h-2 rounded-full animate-growToRight'></div>
        </div>

        <AnimationOnScroll
            animateIn='animate__fadeIn'
            animateOnce={true}
            animatePreScroll={false}
        >
        <div className='flex justify-center items-center'>
            <p className='text-xl w-1/2 text-center font-medium mb-5'>Come to <span className='font-bold text-[#DD2D50]'>Smoothie</span> in Somerville, NJ for a sweet, refreshing treat! <span className='font-bold text-[#DD2D50]'>Smoothie</span> uses nonfat frozen yogurt and fresh ingredients to make delicious combinations. <span className='font-bold text-[#DD2D50]'>Smoothie</span>'s menu features a variety of items including real fruit smoothies, fresh squeezed juices, nondairy fruit frosties, and an assortment of natural grab and go snack offerings. Founded in 2010 <span className='font-bold text-[#DD2D50]'>Smoothie</span> has evolved to become the ultimate place for fun food! Treat yourself right!</p>
        </div>
        </AnimationOnScroll>

        <div className='text-xl text-center font-bold flex justify-center items-center'>
            <Card 
                text={'We make everything fresh'}
                position={'-bottom-10'}
                rotation={'-rotate-90'}
                width={'w-[224px]'}
                height={'h-[332px]'}
                image={ingredImage}
            />
            <Card 
                text={'Friendly Staff'}
                position={'-bottom-1'}
                rotation={''}
                width={'w-[332px]'}
                height={'h-[224px]'}
                margin={'ml-24'}
                image={staffImage}
            />
            <Card 
                text={'Great Prices'}
                position={'-bottom-1'}
                width={'w-[332px]'}
                height={'h-[224px]'}
                margin={'ml-10'}
                image={smoothiesImage}
            />
        </div>
    </div>
  )
}

export default AboutSection