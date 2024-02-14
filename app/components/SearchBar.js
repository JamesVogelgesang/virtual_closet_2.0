'use client'

import React from 'react'
import {useState} from 'react'
import { apiCall } from '../actions/apiCall'

const SearchBar = () => {

  const [location, setLocation] = useState("")
  const [data, setData] = useState({
    tempf:"",
    tempc:"",
    feelsf:"",
    feelsc:"",
    windMPH:"",
    windKPH:"",
    conditions:"",
    image:""
  })
  const [isImperial, setIsImperial] = useState(true)

  async function getWeather(location){
    try {
      const res = await apiCall(location)
      setData({
        tempf:res.current.temp_f,
        tempc:res.current.temp_c,
        feelsf:res.current.feelslike_f,
        feelsc:res.current.feelslike_c,
        windMPH:res.current.wind_mph,
        windKPH:res.current.wind_kph,
        conditions:res.current.condition.text,
        image:res.current.condition.icon
      })
    } catch (error) {
      alert("Location unknown or empty")
    }
  }

  function changeMeasure(){
    setIsImperial(prevIsImperial => !prevIsImperial)
  }

  return (
    <div className='flex justify-center flex-wrap overflow-hidden gap-4 items-center'>
      <div className='justify-center'>
        <label htmlFor='searchbar' className='text-sm'>Search Location:  </label>
        <input id="searchbar" placeholder=' London, etc.' className='border-solid border-2 text-center max-h-6 max-w-40 rounded-xl text-sm' value={location} onChange={(e) => setLocation(e.target.value)}></input>
        <button className='border-solid border-2 text-xs ml-3 rounded-xl max-h-6 px-1 bg-[#CEEDDB] border-[#CEEDDB] hover:font-extrabold' onClick={() => getWeather(location)}>Search</button>
      </div>
  
      <h2 className='font-semibold mt-4 mb-1 text-left'>Current Weather:</h2>
      {data.tempf ? <img src={data.image} alt='Weather icon'></img> : <img src="/info.png"></img>}

      <div className='flex gap-1 mt-3'>
        <label>Imperial </label>
        <input type='radio' name='measurementType' checked={isImperial ? true : false} onChange={changeMeasure}></input>
        <label>Metric </label>
        <input type='radio' name='measurementType' checked={!isImperial ? true : false} onChange={changeMeasure}></input>
      </div>
      <div className='flex flex-wrap gap-1'>
        {
        isImperial 
        ?
        <>
        <div className='px-2 pb-2'>
          <label>Temp (°F): </label>
          <input className='border-solid border-2 text-center max-w-12 max-h-6 w-auto' value={data.tempf} readOnly></input>
        </div>

        <div className='px-2 pb-2'>
          <label>Feels (°F): </label>
          <input className='border-solid border-2 text-center max-w-12 max-h-6 w-auto' value={data.feelsf} readOnly>{}</input>
        </div>
        
        <div className='px-2 pb-2'>
          <label>Wind (MPH): </label>
          <input className='border-solid border-2 text-center max-w-12 max-h-6 w-auto' value={data.windMPH} readOnly></input>
        </div>
        </>
        
        : 
        <>
        <div className='px-2 pb-2'>
          <label>Temp (°C): </label>
          <input className='border-solid border-2 text-center max-w-12 max-h-6 w-auto' value={data.tempc} readOnly></input>
        </div>

        <div className='px-2 pb-2'>
          <label>Feels (°C): </label>
          <input className='border-solid border-2 text-center max-w-12 max-h-6 w-auto' value={data.feelsc} readOnly>{}</input>
        </div>
        
        <div className='px-2 pb-2'>
          <label>Wind (KPH): </label>
          <input className='border-solid border-2 text-center max-w-12 max-h-6 w-auto' value={data.windKPH} readOnly></input>
        </div>
        </>
        }
        
        <div>
          <label>Conditions: </label>
          <input className='border-solid border-2 w-auto text-center max-h-6 ' value={data.conditions} readOnly></input>
        </div>
        
      </div>
        

    </div>
  )
}

export default SearchBar