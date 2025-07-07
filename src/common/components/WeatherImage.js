import {CommonImage} from "./CommonImage";

function interpretWeatherCode(code) {
    const map = {
        1000: "/icons/cupertino_activity_indicator.gif",
        0: "/icons/sun.png",
        1: "/icons/sunny.png",
        2: "/icons/cloudy.png",
        3: "/icons/cloud.png",
        45: "/icons/fog.png",
        48: "/icons/frost_fog.png",
        51: "/icons/cloudy_rain.png",
        53: "/icons/cloudy_rain.png",
        55: "/icons/cloudy_rain.png",
        61: "/icons/light_rain.png",
        63: "/icons/rain.png",
        65: "/icons/heavy_rain.png",
        71: "/icons/snowy.png",
        73: "/icons/snow.png",
        75: "/icons/heavy_snow.png",
        95: "/icons/storm.png",
        96: "/icons/storm.png",
        99: "/icons/storm.png",
    };
    return map[code];
}

export function WeatherImage({weatherCode, size}) {
    return <CommonImage src={interpretWeatherCode(weatherCode)} size={size} />;
}