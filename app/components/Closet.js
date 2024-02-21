import React from 'react'
import Clothing from './Clothing'
import ClosetNav from './ClosetNav'


const getClothes = async() => {
  try {
    const res = await fetch('http://localhost:3000/api/clothes', {cache: "no-store"})

    if(!res.ok){
      throw new Error('failed to fetch clothes')
    }
    return res.json()
  } catch (error) {
    console.log('Error loading topics: ', error)
  }
}

export default async function Closet() {

  const { clothes } = await getClothes();

  const hatList = []
  const jacketList = []
  const shirtList = []
  const pantList = []
  const shoeList = []

  for(let i = 0; i<clothes.length; i++){
    if(clothes[i].clothesType === 'Hat'){
      hatList.push(clothes[i])
    } else if (clothes[i].clothesType === 'Jacket'){
      jacketList.push(clothes[i])
    } else if (clothes[i].clothesType === 'Shirt'){
      shirtList.push(clothes[i])
    } else if (clothes[i].clothesType === 'Pants'){
      pantList.push(clothes[i])
    } else {
      shoeList.push(clothes[i])
    }
  }

  const hats = hatList.map(h => {
    return(
      <Clothing 
      key={h._id} 
      name={h.name}
      clothesType={h.clothesType}
      weatherType={h.weatherType}
    />
    )
  })

  const jackets = jacketList.map(j => {
    return(
      <Clothing 
      key={j._id} 
      name={j.name}
      clothesType={j.clothesType}
      weatherType={j.weatherType}
    />
    )
  })

  const shirts = shirtList.map(s => {
    return(
      <Clothing 
      key={s._id} 
      name={s.name}
      clothesType={s.clothesType}
      weatherType={s.weatherType}
    />
    )
  })

  const pants = pantList.map(p => {
    return(
      <Clothing 
      key={p._id} 
      name={p.name}
      clothesType={p.clothesType}
      weatherType={p.weatherType}
    />
    )
  })

  const shoes = shoeList.map(s => {
    return(
      <Clothing 
      key={s._id} 
      name={s.name}
      clothesType={s.clothesType}
      weatherType={s.weatherType}
    />
    )
  })
  


  return (
    <div className='flex flex-col' >
      <div className='bg-slate-200'>
        <ClosetNav />
      </div>

      <div className='flex text-center rounded gap-4' id='closetComponent'>

        <div className='flex flex-col w-1/5'>
          <div className=' font-bold text-xl py-2'>Hats</div>
          <div>
            {hats}
          </div>
        </div>
        
        <div className='flex flex-col w-1/5'>
          <div className=' font-bold text-xl py-2'>Jackets</div>
          <div>
            {jackets}
          </div>
        </div>

        <div className='flex flex-col w-1/5'>
          <div className=' font-bold text-xl py-2'>Shirts</div>
          <div>
            {shirts}
          </div>
        </div>

        <div className='flex flex-col w-1/5'>
          <div className=' font-bold text-xl py-2'>Pants</div>
          <div>
            {pants}
          </div>
        </div>

        <div className='flex flex-col w-1/5'>
          <div className=' font-bold text-xl py-2'>Shoes</div>
          <div>
            {shoes}
          </div>  
        </div>

      </div>
      
    </div>
  )
}


