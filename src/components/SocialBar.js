import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";


const SocialBar = () => {
  return (
    <ul className='flex justify-center items-center gap-5 mt-10 desktop:absolute desktop:bottom-5 desktop:right-20'>
        <li className='hover:text-[#DD2D50]'><a href="#"><FaFacebookF /></a></li>
        <li className='hover:text-[#DD2D50]'><a href="#"><FaTwitter /></a></li>
        <li className='hover:text-[#DD2D50]'><a href="#"><FaInstagramSquare /></a></li>
    </ul>
  )
}

export default SocialBar