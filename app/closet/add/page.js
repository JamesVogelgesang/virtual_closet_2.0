'use client'
import React from 'react'
import Header from '@/app/components/Header'

const page = () => {
  return (
    <div>
        <Header />
        <div>
            <form className='flex flex-col items-center gap-7 border-2 border-black w-1/3 mx-auto py-4 px-14'>
                <div className='flex flex-col items-center'>
                    <label className='font-bold text-xl'>Name: </label>
                    <input className='border-2 border-black' placeholder='Rick Owens Blazer, etc.'></input>
                </div>
                <div className='flex flex-col items-center'>
                    <label className="font-bold text-xl">Clothing Type: </label>
                    <ul className='flex gap-2'>
                        <div className='flex gap-1'>
                            <input type='radio'></input>
                            <label htmlFor='ctrb1' name='ctrb'>Hat</label>
                            <img></img>
                        </div>
                        <div className='flex gap-1'>
                            <input type='radio'></input>
                            <label htmlFor='ctrb1' name='ctrb'>Jacket</label>
                            <img></img>
                        </div>
                        <div className='flex gap-1'>
                            <input type='radio'></input>
                            <label htmlFor='ctrb1' name='ctrb'>Shirt</label>
                            <img></img>
                        </div>
                        <div className='flex gap-1'>
                            <input type='radio'></input>
                            <label htmlFor='ctrb1' name='ctrb'>Pants</label>
                            <img></img>
                        </div>
                        <div className='flex gap-1'>
                            <input type='radio'></input>
                            <label htmlFor='ctrb1' name='ctrb'>Shoes</label>
                            <img></img>
                        </div>
                    </ul>
                </div>
                <div className='flex flex-col items-center'>
                    <label className="font-bold text-xl">Weather Type: </label>
                    <ul className='flex gap-2 flex-wrap justify-center'>
                        <div className='flex items-center gap-1'>
                            <input type="checkbox" id='rb1' name="weatherTypeRB"></input>
                            <label htmlFor="rb1">Snow</label>
                            <img className="w-10" src='../../../icons/snowflake.png'></img>
                                
                            </div>
                        <div className='flex items-center gap-1'>
                            <input type="checkbox" id='rb2' name="weatherTypeRB"></input>
                            <label htmlFor="rb2">Rain</label>
                            <img className="w-10" src='../../../icons/umbrella.png'></img>
                                
                        </div>
                        <div className='flex items-center gap-1'>
                            <input type="checkbox" id='rb3' name="weatherTypeRB"></input>
                            <label htmlFor="rb3">Cold</label>
                            <img className="w-10" src='../../../icons/bundleup.jpg'></img>
                                
                        </div>
                        <div className='flex items-center gap-1'>
                            <input type="checkbox" id='rb5' name="weatherTypeRB"></input>
                            <label htmlFor="rb5">Moderate</label>
                            <img className="w-10" src='../../../icons/cloud.png'></img>
                                
                        </div>
                        <div className='flex items-center gap-1'>
                            <input type="checkbox" id='rb4' name="weatherTypeRB"></input>
                            <label htmlFor="rb4">Hot</label>
                            <img className="w-10" src='../../../icons/hot.png'></img>
                        <br></br>
                        </div>
                        
                        <div className='flex items-center gap-1'>
                            <input type="checkbox" id='rb6' name="weatherTypeRB"></input>
                            <label htmlFor="rb6">Sunny</label>
                            <img className="w-10" src='../../../icons/sunny.png'></img>
                                
                        </div>
                        <div className='flex items-center gap-1'>
                            <input type="checkbox" id='rb7' name="weatherTypeRB"></input>
                            <label htmlFor="rb7">Overcast </label>
                            <img className="w-10" src='../../../icons/dark-cloud.png'></img>   
                        </div>
                    </ul>
                </div>
                
                <div className='flex flex-col items-center'>
                    <label className='font-bold text-xl'>Upload Image: </label>
                    <input className='border-2 border-black' placeholder='Rick Owens Blazer, etc.'></input>
                </div>
                <button type='submit' className='border-2 border-black p-1'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default page
