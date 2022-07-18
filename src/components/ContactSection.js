import React from 'react'
import Header from './Header'

const ContactSection = () => {
  return (
    <>
        <div /* ref={refProp} */ className='flex flex-col justify-center text-center items-center mb-16 min-h-screen'>
            <Header 
                text={'Contact Us'}
            />
        </div>
    </>
  )
}

export default ContactSection