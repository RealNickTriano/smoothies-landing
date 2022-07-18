import React, { useState } from 'react'
import { useRef } from 'react'

export const NavItem = ({ text, link, specialtiesRef, aboutRef, contactRef, homeRef }) => {
    const [animate, setAnimate] = useState(false);

    const scrollToDrinks = () => specialtiesRef.current.scrollIntoView()
    const scrollToAbout = () => aboutRef.current.scrollIntoView()
    const scrollToHome = () => homeRef.current.scrollIntoView()
    const scrollToContact = () => contactRef.current.scrollIntoView()

   // nav-line-animate
  return (
    <div className='flex flex-col justify-center items-center w-24'>
        <div>
            <button  
                onMouseEnter={() => setAnimate(true)}
                onMouseLeave={() => setAnimate(false)}
                onClick={
                    text === 'Specialties' 
                    ? scrollToDrinks 
                    : text === 'Contact Us' 
                    ? scrollToContact 
                    : text === 'About' 
                    ? scrollToAbout 
                    : text === 'Home' 
                    && scrollToHome }
                style={{color: text === 'Contact Us' ? '#DD2D50' : '',
                        fontWeight: text === 'Contact Us' ? '700' : ''}}
                className='font-[500] text-lg hover:cursor-pointer text-center hover:font-[700]'
            >
                {text}
            </button>
            <div 
                className={animate ? 'nav-line nav-line-animate' : 'nav-line'}
            ></div>
        </div>
    </div>

    
  )
}
