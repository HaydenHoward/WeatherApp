import React, { useState } from "react";
// import axios from 'axios';
import Search from './components/search';
import CurrentWeather from "./components/current-weather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./components/api"


function App() {

  const [currentWeather, setCurrentWeather] = useState(null)

  // const [data,setData] = useState({})
  // const [location, setLocation] = useState('')

  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=-111.79&appid=${process.env.API_KEY}`;
  // const urlLocation = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${process.env.API_KEY}`;


  // const searchLocation = (event) => {
  //   if(event.key === 'Enter') {
  //     axios.get(url).then((response) => {
  //       setData(response.data)
  //       console.log(response.data)
  //     });
  //     setLocation('')
  //   }
  // };
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
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      {currentWeather && <CurrentWeather data={currentWeather} />}


    </div>


  );
}

export default App;
