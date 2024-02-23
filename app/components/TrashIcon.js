'use client'
import React from 'react'
import styles from './modules/trashIcon.module.css'

async function delClothing(id){
  const confirmed = confirm("Are you sure?")
  if(confirmed){
    try {
      const res = await fetch(`http://localhost:3000/api/clothes?id=${id}`, {method: "DELETE"})
  
      if(!res.ok){
        throw new Error("Deletion unsuccessful")
      }
    } catch (error) {
      console.log("Error deleting clothing: ", error)
    }
  }
  
}

const TrashIcon = (props) => {

  

  return (
    <div className='rounded px-3 py-2 hover:bg-slate-300 hover:cursor-pointer' onClick={() => delClothing(props.id)}>
      <button className={styles.trash}>
      </button>
    </div>
    
  )
}

export default TrashIcon
