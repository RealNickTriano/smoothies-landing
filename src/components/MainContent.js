import React from 'react'
import Details from './Details'
import SmoothieDisplay from './SmoothieDisplay'

const MainContent = () => {
  return (
    <div className='flex justify-around items-center'>
        <Details />
        <SmoothieDisplay />
    </div>
  )
}

export default MainContent