'use client'
import React from 'react'
import TrashIcon from './TrashIcon'
import PenIcon from './PenIcon'

const CardIcons = (props) => {
  return (
    <div className='flex justify-around items-center mt-3 ml-28 max-h-14 min-h10'>
      <PenIcon />
      <TrashIcon id={props.id}/>
    </div>
  )
}

export default CardIcons
