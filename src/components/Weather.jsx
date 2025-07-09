import React, { useEffect, useRef, useState } from 'react'
import "./Weather.css"
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'

const Weather = () => {
    const inputref=useRef()
    // store the data from api
    const [weatherdata,setweatherdata]=useState(false)
    const allicons={
        "01d":clear_icon,
        "01n":clear_icon,
        "02d":cloud_icon,
        "02n":cloud_icon,
        "03d":cloud_icon,
        "03n":cloud_icon,
        "04d":drizzle_icon,
        "04n":drizzle_icon,
        "09d":rain_icon,
        "09n":rain_icon,
        "10d":rain_icon,
        "10n":rain_icon,
        "13d":snow_icon,
        "13n":snow_icon,
    }
    const search=async(city)=>{
        if(city==""){
            alert("Enter city Name")
            return;
        }
        try{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API}`
            const response=await fetch(url)// fetch data from url
            const data=await response.json();
            console.log(data);
            if(!response.ok){
                alert(data.message)
                return;
            }
            const icon=allicons[data.weather[0].icon]||clear_icon// if not available
            setweatherdata({
                humidity:data.main.humidity,
                windspeed:data.wind.speed,
                tempreature:Math.floor(data.main.temp),
                location:data.name,
                icon:icon,
            })
        }catch(error){
            setweatherdata(false)
            console.log("error fetching data");
        }
    }
    // now search when component get loaded
    useEffect(()=>{
        search("London")
    },[])
  return (
    <div className='weather'>
        <div className='searchbar'>
            <input ref={inputref} type='text' placeholder='search'/>
            <img src={search_icon} alt="" onClick={()=>search(inputref.current.value)}/>
        </div>
        {weatherdata?<><img src={weatherdata.icon} alt="" className='weathericon'/>
        <p className='tempreatur'>{weatherdata.tempreature}°C</p>
        <p className='location'>{weatherdata.location}</p>
        <div className='weatherdata'>
            <div className='col'>
                <img src={humidity_icon} alt=""/>
                <div>
                    <p>{weatherdata.humidity}%</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className='col'>
                <img src={wind_icon} alt=""/>
                <div>
                    <p>{weatherdata.windspeed}km/h</p>
                    <span>Wind Speed</span>
                </div>
            </div>
        </div></>:<></>}
    </div>
  )
}

export default Weather
