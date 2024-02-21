'use client'
import React from 'react'
import styles from './modules/addIcon.module.css'

const ClosetAdd = () => {

    function handleClick(){
        console.log('Add closet clicked')
    }

  return (
    <div className='flex items-center border-2 rounded border-slate-500 p-1 font-semibold hover:cursor-pointer hover:bg-slate-300' onClick={handleClick}>
      <button className={styles.plus}></button>
      <label className='ml-1 hover:cursor-pointer'>Add to Closet</label>
    </div>
  )
}

export default ClosetAdd
