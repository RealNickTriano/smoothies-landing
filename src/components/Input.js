import React from 'react'

const Input = ({type, placeholder, required, label, name}) => {
  return (
    <>
        <label 
            className='text-2xl font-bold mb-2 ml-2'
            htmlFor={name}
        >{label}</label>
        <input 
            className='mb-5 p-2 text-xl w-full rounded-full  border-2 border-gray-500 shadow-md font-medium'
            type={type} 
            placeholder={placeholder}
            required={required}
            label={label}
            name={name}
        />
    </>
  )
}

export default Input