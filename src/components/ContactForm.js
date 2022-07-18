import React from 'react'
import Button from './Button'
import Input from './Input'
import { useState } from 'react'
import SubmittedSuccess from './SubmittedSuccess'


const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

  return (
    <>
    {!submitted ?
        <form 
            className='flex flex-col justify-center items-start w-full'
            action="POST"
            onSubmit={(e) => handleSubmit(e)}
        >
            <Input 
                type="text" 
                placeholder='User90210@gmail.com'
                required={true}
                label='Email Address:'
                name='email'
            />
            <Input 
                type="text" 
                placeholder='Name'
                required={true}
                label='Name:'
                name='name'
            />
            <textarea 
                className='mb-5 p-2 text-xl w-full rounded-lg  border-2 border-gray-500 shadow-md font-medium resize-none'
                name="message" 
                required={true} 
                placeholder='Message...' 
                cols="30" rows="10">

            </textarea>
            <Button 
                text='Submit'
            />
        </form>
        : <SubmittedSuccess />
    }
    </>
  )
}

export default ContactForm