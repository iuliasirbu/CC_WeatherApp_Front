import axios from "axios";
import React, {useState, useEffect} from "react";



function CityWeather({onWeather}) {
    const [weather, setWeather] = useState("");
    const [city, setCity] = useState("");

    const handleGetWeather = async (e) => {
    const _city = document.getElementById('city').value;
        setCity(_city)
        const result = await axios.get(`${process.env.REACT_APP_API_URL}/utils/?city=${_city}`);
        console.log("Result", result.data);
        setWeather(result.data);
        onWeather(result.data)
}

    return (
        <div id="CityWeather">
            <h2 className="text-2xl font-bold mb-4 font-serif">Insert city name:</h2>
            <form>
                <div className="w-full px-3 mb-6 md:mb-0">
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white font-serif" id="city" type="text" placeholder="City" />
                </div>
            </form>
            <button className="bg-indigo-400 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded m-2 capitalize font-serif" onClick={handleGetWeather}>Search</button>
            <span className="block uppercase tracking-wide text-gray-700 text-xs font-bold mt-10 font-serif">
                {weather} 
            </span>
        </div>
    )
}

export default CityWeather