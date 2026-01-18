

import "./forecast.css"
function Forecast({ forecast }) {
  if (!forecast || forecast.length === 0) {
    return <p>No forecast data</p>;
  }

  return (
    <div className="forecast-grid">
      {forecast.map((day, index) => (
        <div key={index} className="forecast-card">
          <p>{day.date}</p>
          <img
            src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
            alt={day.condition}
          />
          <p>{day.temp}°C</p>
          <p>{day.condition}</p>
        </div>
      ))}
    </div>
  );
}

export default Forecast;
