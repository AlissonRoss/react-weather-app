//import {useState} from "react";
import "./WeatherApp.css"
import { useState } from "react";

import search_icon from './images/search.png'
import clear_icon from './images/clear.png';
import cloud_icon from './images/clouds.png';
import drizzle_icon from './images/drizzle.png';
import rain_icon from './images/rain.png';
import snow_icon from './images/snow.png';
import wind_icon from './images/wind.png';
import humidity_icon from './images/humidity.png';


const WeatherApp = () => {

    let api_key ="d81d7dd720dd2273113d2efe6af1a888";

    const [wicon,setWicon] = useState(cloud_icon);
    
    const search = async () => {
        const element=document.getElementsByClassName("cityInput");
        if(element[0].value==="")
        {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=imperial&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementByClassName("humidity-percent");
        const wind = document.getElementByClassName("wind-rate");
        const temperature = document.getElementByClassName("weather-temp");
        const location = document.getElementByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity+" %";
        wind[0].innerHTML = Math.floor(data.wind.speed)+" mph";
        temperature[0].innerHTML = Math.floor(data.main.temp)+"°F";
        location[0].innerHTML = data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
        {
           setWicon({clear_icon});
        }
        else if (data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
        {
            setWicon({cloud_icon});
        }
        else if (data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
        {
            setWicon({drizzle_icon});
        }
        else if (data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
        {
            setWicon({drizzle_icon});
        }
        else if (data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
        {
            setWicon({rain_icon});
        }
        else if (data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
        {
            setWicon({rain_icon});
        }
        else if (data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
        {
            setWicon({snow_icon});
        }
        else 
        {
            setWicon({clear_icon});
        }
    }

    return (
        <div className='container'>
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder='Search'/>
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src={search_icon} alt=""/>
                </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt=""/>
            </div>
            <div className="weather-image">24F</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon"/>
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon"/>
                    <div className="data">
                        <div className="humidity-percentage">18 MPS</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default WeatherApp;