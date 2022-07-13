import React from 'react'
import CardNav from './CardNav'
import MainContent from './MainContent'
import strawberry from '../images/strawberry.svg'
import blackberry from '../images/blackberry.svg'
import blueberry from '../images/blueberry.svg'

const MainCard = ({ navItems }) => {
  return (
    <div className='bg-white rounded-xl border-2 border-red-500 shadow-lg px-20 py-12 w-full translate-x-5 ml-36 relative'>
        <CardNav 
            navItems={navItems}
        />
        <MainContent />
        <div className='absolute -top-20 left-1/2'>
            <img src={strawberry} alt="" />
        </div>
        <div className='absolute -bottom-20 left-2/3'>
            <img src={blackberry} alt="" />
        </div>
        <div className='absolute top-1/3 -left-20'>
            <img src={blueberry} alt="" />
        </div>
    </div>
  )
}

export default MainCard