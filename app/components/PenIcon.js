import React from 'react'
import styles from "./modules/penIcon.module.css"

const PenIcon = () => {

  function handleClick(){
    console.log('Pen icon clicked')
  }

  return (
    <div className='rounded p-3 hover:bg-slate-300 hover:cursor-pointer' onClick={handleClick}>
      <button className={styles.pen} >
      </button>
    </div>
    
  )
}

export default PenIcon
