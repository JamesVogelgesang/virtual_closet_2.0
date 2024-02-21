'use client'
import React from 'react'
import styles from './modules/trashIcon.module.css'

const TrashIcon = () => {

  function handleClick(){
    console.log('Trash icon clicked')
  }

  return (
    <div className='rounded px-3 py-2 hover:bg-slate-300 hover:cursor-pointer' onClick={handleClick}>
      <button className={styles.trash}>
      </button>
    </div>
    
  )
}

export default TrashIcon
