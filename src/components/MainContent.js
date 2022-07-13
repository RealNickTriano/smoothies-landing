import React from 'react'
import Details from './Details'
import SmoothieDisplay from './SmoothieDisplay'

const MainContent = () => {
  return (
    <div className='desktop:flex-row flex flex-col justify-center items-center'>
        <Details />
        <SmoothieDisplay />
    </div>
  )
}

export default MainContent