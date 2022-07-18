import React from 'react'
import Button from './Button'
import Input from './Input'

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
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
        <Input 
            type="text" 
            placeholder='Message...'
            required={true}
            label='Message:'
            name='message'
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
  )
}

export default ContactForm