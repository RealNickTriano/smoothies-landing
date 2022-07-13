import React from 'react'
import CardNav from './CardNav'
import MainContent from './MainContent'

const MainCard = ({ navItems }) => {
  return (
    <div className='bg-white rounded-xl border-2 border-red-500 shadow-lg px-20 py-12 w-full translate-x-5 ml-36'>
        <CardNav 
            navItems={navItems}
        />
        <MainContent />
    </div>
  )
}

export default MainCard