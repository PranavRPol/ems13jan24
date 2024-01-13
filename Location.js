// src/components/Location.js
import React, { useState, useEffect } from 'react';


const Location = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        // Get user's current location using Geolocation API
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;

            // Fetch additional data using the obtained coordinates
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=YOUR_OPENWEATHERMAP_API_KEY`)
              .then((response) => response.json())
              .then((data) => {
                setLocation({ latitude, longitude, weather: data.weather[0].description });
              })
              .catch((error) => {
                setError('Error fetching weather data');
                console.error(error);
              });
          },
          (error) => {
            setError(`Error getting location: ${error.message}`);
          }
        );
      } catch (error) {
        setError('Error getting location');
        console.error(error);
      }
    };

    fetchLocation();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {location && (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <p>Weather: {location.weather}</p>
        </div>
      )}
    </div>
  );
};

export default Location;
