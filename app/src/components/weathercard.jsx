import React from 'react'
import "./WeatherCard.css"
const WeatherCard = ({weather}) => {
if(!weather)  return null;
return (
    < >
  <div className="Weather-Card">
    <h2>{weather.city}</h2>
    <div className="temp">
      <span className="temperature"> temperature: 
        {weather.temperature}
      </span>
    </div>
    <p className="condition">condition: {weather.wind}</p>
    <div className="details">
      <p> Humidity: {weather.humidity}%</p>
    </div>
  </div>
    
    
    </>
  )
}

export default WeatherCard
