import React from 'react'

const Copyright = () => {
    const year = new Date().getFullYear()
  return (
    <h1 className='font-medium text-white text-sm'>&copy;{year} Nicholas Triano. All rights reserved. </h1>
  )
}

export default Copyright