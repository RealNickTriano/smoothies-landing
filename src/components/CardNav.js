import React from 'react'
import Logo from './Logo'
import { NavItem } from './NavItem'


const CardNav = ({ navItems, specialtiesRef, aboutRef, contactRef, homeRef }) => {
  return (
    <div className='flex flex-col desktop:flex-row justify-between items-center'>
        <Logo />
        <div className='flex desktop:flex-row flex-col justify-center items-center gap-10'>
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

export default CardNav