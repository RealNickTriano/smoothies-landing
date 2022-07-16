import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";


const SocialBar = () => {
  return (
    <ul className='flex justify-center items-center gap-5 mt-10 desktop:absolute desktop:bottom-5 desktop:right-20'>
        <li className='hover:text-[#DD2D50]'><a href="https://www.facebook.com/" target="_blank"><FaFacebookF /></a></li>
        <li className='hover:text-[#DD2D50]'><a href="https://twitter.com/" target="_blank"><FaTwitter /></a></li>
        <li className='hover:text-[#DD2D50]'><a href="https://www.instagram.com/" target="_blank"><FaInstagramSquare /></a></li>
    </ul>
  )
}

export default SocialBar