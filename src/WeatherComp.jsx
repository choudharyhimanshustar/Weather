import { useLocation } from "react-router-dom";
import './WeatherComp.css'
import { CiLocationOn } from "react-icons/ci";
import { FaTemperatureHigh } from "react-icons/fa";
import { TbTemperatureCelsius } from "react-icons/tb";
import { FaWind } from "react-icons/fa";
import { PiSpeedometerDuotone } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import { GiSpeedBoat } from "react-icons/gi";
import { MdOutlineVisibility } from "react-icons/md";
export default function WeatherComp() {
    const location = useLocation();
    const { data } = location.state || {};
    return (<div className="weather">
        <div className="weatherSecDiv">
            <div className="WeatherComp">
                <p>Location <CiLocationOn /></p>
                
                <h1>{data.location.name} </h1>
            </div>
            <div className="WeatherComp">
                <p>Temp <TbTemperatureCelsius /></p>
                <h1>{data.current.temp_c} C</h1>
            </div>
            <div className="WeatherComp">
                <p>Feels Like <FaTemperatureHigh /></p>
                <h1>{data.current.feelslike_c} C</h1>
            </div>
            <div className="WeatherComp">
                <p>Humidity <WiHumidity /></p>
                <h1>{data.current.humidity}%</h1>
            </div>
        </div>

        <div className="weatherSecDiv">
            <div className="WeatherComp">
                <p>Wind Direction <FaWind /></p>
                <h1>{data.current.wind_dir}</h1>
            </div>
            <div className="WeatherComp">
                <p>Wind Speed <GiSpeedBoat /></p>
                <h1>{data.current.wind_kph} KM/H</h1>
            </div>
            <div className="WeatherComp">
                <p>Pressure <PiSpeedometerDuotone /></p>
                <h1>{data.current.pressure_mb} mb</h1>
            </div>
            <div className="WeatherComp">
                <p>Visibility <MdOutlineVisibility /></p>
                <h1>{data.current.vis_km} kM</h1>
            </div>
        </div>


    </div>)
}