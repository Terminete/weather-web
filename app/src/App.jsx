import { useState } from 'react';

import SearchBar from './components/searchbar';
import WeatherCard from './components/weathercard';
import Forecast from "./components/forecast";
import ForecastSkeleton from './components/ForecastSkeleton';
import {
  getCurrentWeather,
  getForecast,
} from "./Services/weatherApi";
function App() {
const [city,setCity] = useState("");
const [weather, setWeather] = useState(null);
const [forecast, setForecast] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");




const handleSearch = async() => {

  if (!city) return;
  
  setLoading(true);
  setError("");
  setWeather(null);
  setForecast([]);

  try{
    //Fetch current weather
    const weather = await getCurrentWeather(city);
    setWeather({
      city: weather.name,
      temperature: Math.round(weather.main.temp),
      condition: weather.weather[0].description,
      humidity:weather.main.humidity,
      wind:weather.wind.speed,
      icon: weather.weather[0].icon,
    });
    //Fetch forecast
    const forecastData = await getForecast(city);

    // Pick one forecast per day (every 8th item = 24h)
      const dailyForecast =   forecastData.list
          .filter(item => item.dt_txt.includes("12:00:00"))
  .slice(0, 5)
  .map(item => ({
    date: new Date(item.dt * 1000).toLocaleDateString("en-US", {
      weekday: "short",
    }),
    temp: Math.round(item.main.temp),
    condition: item.weather[0].description,
    icon: item.weather[0].icon,
  }));

 setForecast(dailyForecast);
 console.log("Forecast state updated");

    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };


  return (
    < >
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-3xl text-center md-6">Weather App</h1>
      
      <SearchBar city={city}
        setCity={setCity}
        onSearch={handleSearch}
        loading={loading}
         />
          {error && <p className="error">{error}</p>}
      <WeatherCard weather={weather} />
      <p>Forecast length: {forecast.length}</p>
      {loading && <ForecastSkeleton />}

    {!loading && forecast.length > 0 && (

      
      <Forecast forecast={forecast} />
    )}
    </div>
    
    </>
    );
}

export default App
