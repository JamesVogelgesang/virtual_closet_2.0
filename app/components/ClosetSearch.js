'use client'
import React from 'react'

const ClosetSearch = () => {

    function handleClick(){
        console.log('Closet search clicked')
    }

  return (
    <div>
      <input type='search' className='border-2 border-slate-500 rounded-lg p-1' placeholder='Joggers, etc.'></input>
      <button type='submit' className='ml-2 border-2 border-slate-500 rounded p-1 hover:bg-slate-300 font-semibold' onClick={handleClick}>Search</button>
    </div>
  )
}

export default ClosetSearch
