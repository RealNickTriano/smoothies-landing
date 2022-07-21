import React from 'react'
import Copyright from './Copyright'
import LogoWhite from './LogoWhite'
import SocialsFoot from './SocialsFoot'

const Footer = () => {
  return (
    <div className='bg-[#DD2D50] mt-64 flex justify-center items-center flex-col py-12'>
      <div className='flex justify-center desktop:gap-20 gap-10 items-center mb-12'>

        <div className='flex flex-col justify-center items-center'>
          <LogoWhite />
          <h1 className='text-xl text-white font-bold'>Made Fresh.</h1>
        </div>

        <ul className='flex flex-col justify-center items-start text-white'>
          <li><a className='hover:text-black' href="#">About</a></li>
          <li><a className='hover:text-black' href="#">Contact Us</a></li>
          <li><a className='hover:text-black' href="#">Partners</a></li>
          <li><a className='hover:text-black' href="#">Careers</a></li>
        </ul>

        <ul className='flex flex-col justify-center items-start text-white'>
          <li><a className='hover:text-black' href="#">FAQ</a></li>
          <li><a className='hover:text-black' href="#">News</a></li>
          <li><a className='hover:text-black' href="#">Our Story</a></li>
          <li><a className='hover:text-black' href="#">Gift Cards</a></li>
        </ul>

      </div>
      <div className='h-[1px] w-3/4 bg-white'></div>
      <div className='flex flex-col justify-center items-center gap-2 mb-6 mt-12'>
        <SocialsFoot />
        <Copyright />
      </div>
    </div>
  )
}

export default Footer