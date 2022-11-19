import React, { useState } from "react";
import Search from './components/search';
import CurrentWeather from "./components/current-weather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./components/api"


function App() {

  const [currentWeather, setCurrentWeather] = useState(null)

  // Gets the lat and long from the Geo API and then puts it into the OpenWeatherAPI and returns current weather for the location.
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherURL = `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${WEATHER_API_KEY}`;
    fetch(currentWeatherURL)
      .then(async (response) => {
        const weatherResponse = await response.json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
      })
      .catch((err) => console.log(err));
    console.log(currentWeather);

  };

  return (
    <div className="App">
      <div className="search">
        {/* gets the search item to be able to search locations */}
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <div className="weatherCurrent">
        {/* Displays the current weather */}
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </div>
    </div>
  );
}

export default App;