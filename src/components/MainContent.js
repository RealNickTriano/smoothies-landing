import React from 'react'
import Details from './Details'
import SmoothieDisplay from './SmoothieDisplay'

const MainContent = () => {
  return (
    <div className='flex justify-between items-center gap-10'>
        <Details />
        <SmoothieDisplay />
    </div>
  )
}

export default MainContent