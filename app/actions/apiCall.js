'use server'

export async function apiCall(location){
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${ process.env.API_KEY }&q=${ location }&aqi=no`)
    const data = await res.json()
    console.log(data)
    return data
}