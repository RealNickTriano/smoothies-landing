import React from 'react'
import { NavItem } from './NavItem'

const MainNav = ({ aboutRef, specialtiesRef, contactRef ,homeRef, navItems}) => {
  return (
    <div className={`fixed z-20 w-1/2 bg-white top-0 py-2 shadow-md border-b-2 border-r-2 border-l-2 rounded-br-xl rounded-bl-xl border-red-400 animate-riseDownFadeIn`}>
        <div className='flex justify-center items-center'>
        {
            navItems.map((item, index) => {
                return (
                    <NavItem 
                        key={index}
                        text={item}
                        link={'#'}
                        aboutRef={aboutRef}
                        specialtiesRef={specialtiesRef}
                        contactRef={contactRef}
                        homeRef={homeRef}
                    />
                )
            })
        }
        </div>
    </div>
  )
}

export default MainNav