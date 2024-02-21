import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className=''>
      <nav className='flex justify-between bg-slate-500 items-center py-8 px-40'>
        <h1 className='text-2xl font-extrabold text-white'>Virtual Closet 2.0</h1>
        <ul>
          <Link href={"/"} className='ml-12 font-bold border-2 rounded p-2 text-white text-lg hover:bg-white hover:text-slate-500 hover:border-white'>Home</Link>
          <Link href={"/closet"} className='ml-12 font-bold border-2 rounded p-2 text-white text-lg hover:bg-white hover:text-slate-500 hover:border-white'>Closet</Link>
          <Link href={"/about"} className='ml-12 font-bold border-2 rounded p-2 text-white text-lg hover:bg-white hover:text-slate-500 hover:border-white'>About</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
