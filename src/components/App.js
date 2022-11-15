import React from "react";
import './App.css';


function App() {

  // const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=-111.79&appid=763e76e88426b81aefc4ca5517d33603';


  
  return (
    <div className="App">
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Rexburg</p>
          </div>
          <div className='temp'>
            <h1>60 F</h1>
          </div>
          <div className="description">
            <p>clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65 F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            <p>12 MPH</p>
          </div>
        </div>
      </div>
    </div>
     

  );
}

export default App;
