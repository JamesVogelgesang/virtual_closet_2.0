'use client'
import React from 'react'
import styles from './modules/addIcon.module.css'
import Link from 'next/link'

const ClosetAdd = () => {

    function handleClick(){
        
    }

  return (
    <div className=' border-2 rounded border-slate-500 p-1 font-semibold hover:cursor-pointer hover:bg-slate-300' onClick={handleClick}>
      <Link href={"/closet/add"} className='flex items-center'>
        <button className={styles.plus}></button>
        <label className='ml-1 hover:cursor-pointer'>Add to Closet</label>
      </Link>
      
    </div>
  )
}

export default ClosetAdd
