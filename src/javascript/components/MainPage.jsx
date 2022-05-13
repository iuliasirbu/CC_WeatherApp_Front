import React, {useState, useEffect} from "react";
import Header from "./Header";
import MessagesList from "./MessagesList";
import MessagesSubmit from "./MessagesSubmit";
import CityWeather from "./CityWeather";

function MainPage(props) {
    const [weather, setWeather] = useState("");
    const handleWeather = (data) => {
        setWeather(data);
        console.log("Weather",weather);
    }
    return (
        <div id="MainPage">
            <Header title={'Weather app'} />
            <div className="flex max-w-7xl m-auto px-14 py-24">
                <div className="w-1/3 pl-1">
                    <MessagesList/>
                </div>
                <div className="w-1/3 pl-10 pr-10">
                    <CityWeather onWeather={handleWeather}/>
                </div>
                <div className="w-1/3 pr-1">
                    <MessagesSubmit weather={weather}/>
                </div>
            </div>
        </div>
    )
}

export default MainPage;