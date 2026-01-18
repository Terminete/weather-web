import React from 'react'

const ForecastSkeleton = () => {
  return (
    < >
    <div className="forecast-grid">
      {Array.from({ length: 5 }).map((_, i)=>(
        <div key={i}className="forecast-card  ">
          <div className="skeleton-day"></div>
        <div className="skeleton-icon"></div>
        <div className="skeleton-temp"></div>

        </div>

      ))}
    </div>
    
    </>
      
  
  );
}

export default ForecastSkeleton
