import React from 'react'


const Clothing = (props) => {

  const getWeatherIcon = (array) => {
    const iconArray = array.map(type => {
      if(type === 'Snow'){
        return(
          <img className="w-8 h-8" src="icons/snowflake.png"></img>
        )  
      } else if(type === 'Cold'){
        return(
          <img className="w-10" src="icons/bundleup.jpg"></img>
        )
      } else if (type === 'Moderate'){
        return(<img className="w-9" src="icons/cloud.png"></img>)
      } else if (type === "Rain"){
        return(<img className="w-10" src="icons/umbrella.png"></img>)
      } else if(type === "Overcast"){
        return(<img className="w-8" src="icons/dark-cloud.png"></img>)
      } else if(type === "Sunny"){
        return(<img className="w-8" src="icons/sunny.png"></img>)
      } else if(type === "Hot"){
        return(<img className="w-8" src="icons/hot.png"></img>)
      }
    })
    return iconArray
  }
  

  return (
    <div className='border-black border-2 py-2 m-2 rounded'>
      <div className='flex'>
        <img src={props.image ? props.image : "icons/info.png"} className='w-20 ml-auto mr-auto my-2 border-2 rounded'></img>
      </div>

      <div className='flex'>
        <label className='font-semibold ml-6'>Name: </label>
        <p className='ml-4 mr-6'>{props.name}</p>

      </div>
      {/* <label className='font-semibold ml-6 align-left'>Weather: </label> */}
  
        <div className='flex ml-4 mr-6 justify-center items-center'>{getWeatherIcon(props.weatherType)}</div>

    </div>
  )
}

export default Clothing
