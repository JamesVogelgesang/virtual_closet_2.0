import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className=''>
      <nav className='flex justify-between bg-slate-500 items-center py-8 px-40'>
        <h1 className='text-2xl font-extrabold text-white'>Virtual Closet 2.0</h1>
        <ul>
          <Link href={"/"} className='ml-12 font-bold text-white text-lg'>Home</Link>
          <Link href={"/closet"} className='ml-12 font-bold text-white text-lg'>Closet</Link>
          <Link href={"/about"} className='ml-12 font-bold text-white text-lg'>About</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
