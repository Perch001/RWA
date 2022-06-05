import React from 'react'
import "../style/weatherPanel.css"
import { FiWind, FiCloud} from "react-icons/fi";
import {MdOutlineWaterDrop} from 'react-icons/md'
import {BsFillCloudHaze2Fill,BsSun,BsCloudRainHeavyFill,BsSnow} from 'react-icons/bs'
import {TiWeatherCloudy} from 'react-icons/ti'
import {IoIosThunderstorm} from 'react-icons/io'
import {RiCelsiusFill} from 'react-icons/ri'



function WeatherPanel(props) {
  const icons = props.panel.weather[0].main
  const temp = Math.round(props.panel.main.temp - 273.15)
  const feels_like = Math.round(props.panel.main.feels_like - 273.15)
  return (
    <> 
        <div className='panel'>
          <div className='sys'>
              <div className='city'>{props.panel.name},</div>
              <div className='country'>{props.panel.sys.country}</div>
          </div>
          
          
          
           <div className='drop_panel'>
           <div>
              <FiWind className='wind'/>
              <div className='wind_kph'>{props.panel.wind.speed} kph</div>
           </div>
           <div>
              <MdOutlineWaterDrop className='humidity_icon'/>
              <div className='humidity'>{props.panel.main.humidity} %</div>
           </div>
              
              <div>
                <FiCloud className='cloud_icon'/>
                <div className='cloud'>{props.panel.clouds.all} %</div>
              </div>
              
              
          </div>

          
          <div className='params'>
              <div className='weather_icons'>
                {icons === 'Haze' ? (<div><BsFillCloudHaze2Fill /></div>) : ""}
                {icons === 'Clouds' ? (<div><TiWeatherCloudy /></div>) : ""}
                {icons === 'Clear' ? (<div><BsSun /></div>) : ""}
                {icons === 'Rain' ? (<div><BsCloudRainHeavyFill /></div>) : ""}
                {icons === 'Snow' ? (<div><BsSnow /></div>) : ""}
                {icons === 'Thunderstorm' ? (<div><IoIosThunderstorm /></div>) : ""}
              </div>
              
              <div>
                <div className='temp_c'>{temp} <RiCelsiusFill /></div>
                <div className="feels">Feels like: {feels_like} <RiCelsiusFill /></div>
              </div>
          </div>
        </div>
    </>
  )
}

export default WeatherPanel