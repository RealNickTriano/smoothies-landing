import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const SocialsFoot = () => {
  return (
    <ul className='flex justify-center items-center gap-5 text-white'>
        <li className='hover:text-black hover:border-black border-2 border-white rounded-full p-2'><a href="https://www.facebook.com/" target="_blank">
            <FaFacebookF size={20}/></a></li>
        <li className='hover:text-black hover:border-black border-2 border-white rounded-full p-2'><a href="https://twitter.com/" target="_blank"><FaTwitter size={20}/></a></li>
        <li className='hover:text-black hover:border-black border-2 border-white rounded-full p-2'><a href="https://www.instagram.com/" target="_blank"><FaInstagramSquare size={20}/></a></li>
    </ul>
  )
}

export default SocialsFoot