import React from 'react'
import ContactForm from './ContactForm'
import Header from './Header'
import blob from '../images/blob.svg'

const ContactSection = () => {
  return (
    <>
        <div /* ref={refProp} */ className='flex flex-col justify-center text-center items-center mb-16 min-h-screen'>
            <Header 
                text={'Contact Us'}
            />
            <div
                className='w-2/3 py-6 px-12 flex justify-center items-center bg-white shadow-md rounded-lg border-4 border-black'>
                <ContactForm />
            </div>
        </div>
    </>
  )
}

export default ContactSection