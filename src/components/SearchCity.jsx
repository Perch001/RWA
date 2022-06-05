import React,{useState, useEffect} from 'react'
import "../style/weathe.css"
import { RiSearch2Line } from "react-icons/ri";
import WeatherPanel from './WeatherPanel';


function SearchCity() {
    const API_KEY = "bbea31f7a84859362caf4a5b5b9ab18c"
    const [city, getCity] = useState("")
    const [weather, setWeather] = useState({})
    
    

  async function weatherFetch(){

      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      const data = await response.json();
      setWeather(data)
      console.log(data)
      getCity('')
    
  }
  useEffect(() => {
    weatherFetch()
  },[])
  

  
  return (
    <div className="App">
        <button
          className="btn-search"
          onClick={weatherFetch}
        >
          <RiSearch2Line />
        </button>      
        <input
          className="search-box" 
          type="text"
          placeholder='Enter city...'
          value={city}
          onChange = {(e) => getCity(e.target.value)}
        ></input>     
        <div>
          <div>
            <div className='enter'>
              Enter this
            </div>  
            {typeof weather.main === "undefined" ? (
              <div className="more">
                <div>Pleace, enter the City name</div>
              </div>)
              : (
                  <WeatherPanel panel={weather}/>

                )
              
          }
          
          </div>
        </div>     
    </div>
  );
}

export default SearchCity