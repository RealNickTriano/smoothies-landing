import React from 'react'
import Logo from './Logo'
import { NavItem } from './NavItem'


const CardNav = ({ navItems }) => {
  return (
    <div className='flex justify-between items-center'>
        <Logo />
        <div className='flex justify-center items-center gap-10'>
            {
                navItems.map((item, index) => {
                    return (
                        <NavItem 
                            key={index}
                            text={item}
                            link={'#'}
                        />
                    )
                })
            }
        </div>

    </div>
  )
}

export default CardNav