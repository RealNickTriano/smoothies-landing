import React, { useState } from 'react'
import { useRef } from 'react'

export const NavItem = ({ text, link }) => {
    const [animate, setAnimate] = useState(false);

   // nav-line-animate
  return (
    <div className='flex flex-col justify-center items-center w-24'>
        <div>
            <a 
                href={link} 
                onMouseEnter={() => setAnimate(true)}
                onMouseLeave={() => setAnimate(false)}
                style={{color: text === 'Contact Us' ? '#DD2D50' : '',
                        fontWeight: text === 'Contact Us' ? '700' : ''}}
                className='font-[500] text-lg hover:cursor-pointer text-center hover:font-[700]'
            >
                {text}
            </a>
            <div 
                className={animate ? 'nav-line nav-line-animate' : 'nav-line'}
            ></div>
        </div>
    </div>

    
  )
}
