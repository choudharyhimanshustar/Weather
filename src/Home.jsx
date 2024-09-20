import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import './Home.css'
import Weather from './Weather.png'
import { useNavigate } from "react-router-dom";
export default function Home() {
    const [city, setCity] = useState("");
    const navigate=useNavigate();
    const [weatherData, setWeatherData] = useState();
    
    
    
    const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${city}`;

    async function handleClick() {
        try {

            const response = await fetch(url);
            const data = await response.json();
            setWeatherData(data);
            
            navigate('/Weather',{state:{data:data}});
        } catch (err) {
            console.log(err);

        }
    }
    return (<div className="Home">
        <div className='SearchBar'>
            <input type="text" value={city} placeholder="City Name" onChange={(e) => setCity(e.target.value)} />
            <button onClick={() => handleClick()}><CiSearch /></button>
        </div>
        <div className="Webrico">
            <h2>Welcome to Webrico</h2>
            <b>Stay Ahead of the Storm</b>
            <div>
                <img src={Weather} className="Weather" />
            </div>

        </div>

    </div>)
}