import React from 'react'
import CardNav from './CardNav'
import MainContent from './MainContent'
import strawberry from '../images/strawberry.svg'
import blackberry from '../images/blackberry.svg'
import blueberry from '../images/blueberry.svg'
import PreviewSmoothie from './PreviewSmoothie'
import blueBanSmoothie from '../images/blue-ban-smooth.svg'
import cucumberSmoothie from '../images/cucumbersmoothie.svg'
import mangoAlmondSmoothie from '../images/mangoalmond.svg'
import blob from '../images/blob.svg';
import SocialBar from './SocialBar'

const MainCard = ({ navItems, specialtiesRef, aboutRef, contactRef, homeRef }) => {
  return (
    <div className='bg-white rounded-xl border-2 border-red-500 desktop:shadow-lg desktop:px-20 px-5 py-12 pb-40 desktop:w-full w-[100%] desktop:translate-x-5 desktop:ml-36 relative z-10'>
        <CardNav 
            navItems={navItems}
            specialtiesRef={specialtiesRef}
            aboutRef={aboutRef}
            contactRef={contactRef}
            homeRef={homeRef}
        />
        <MainContent />
        
        <div className='z-10 absolute desktop:-top-20 -top-10 left-1/2'>
            <img className='desktop:w-[100%] w-[75%]' src={strawberry} alt="" />
        </div>
        <div className='z-10 absolute -bottom-20 left-2/3 hidden desktop:flex'>
            <img src={blackberry} alt="" />
        </div>
        <div className='z-10 absolute desktop:top-1/3 desktop:-left-20 -top-10 left-20'>
            <img className='desktop:w-[100%] w-[75%]' src={blueberry} alt="" />
        </div>
        
        <div className='z-10 flex desktop:flex-row flex-col justify-center items-center desktop:absolute -bottom-52 desktop:-left-20 desktop:gap-8 gap-16 bottom left-32 mt-24 desktop:mt-0 font-montserrat'>
            <PreviewSmoothie 
                image={blueBanSmoothie}
                color={'#CEDBEB'}
                darkColor={'#3168AA'}
                name={'Blueberry Banana Smoothie'}
                price={'5.75'}
            />
            <PreviewSmoothie 
                image={cucumberSmoothie}
                color={'#E2FBC4'}
                darkColor={'#889F34'}
                name={'Cucumber Smoothie'}
                price={'4.50'}
            />
            <PreviewSmoothie 
                image={mangoAlmondSmoothie}
                color={'#FDF3D8'}
                darkColor={'#FEAC00'}
                name={'Mango-Almond Smoothie'}
                price={'5.25'}
            />
        </div>
        <SocialBar />
    </div>
  )
}

export default MainCard