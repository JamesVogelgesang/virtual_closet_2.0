import React from 'react'
import ClosetSearch from './ClosetSearch'
import ClosetAdd from './ClosetAdd'

const ClosetNav = () => {
  return (
    <div className='flex justify-around items-center my-8 bg-slate-200'>
        <ClosetAdd />
        <ClosetSearch />
      
    </div>
  )
}

export default ClosetNav
