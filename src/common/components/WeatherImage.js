import {CommonImage} from "./CommonImage";

function interpretWeatherCode(code) {
    const map = {
        0: "/icons/cloudy.png",
        1: "/icons/cloudy.png",
        2: "/icons/cloud.png",
        3: "/icons/cloud.png",
        45: "/icons/cloud.png",
        48: "/icons/cloud.png",
        51: "/icons/cloudy_rain.png",
        53: "/icons/cloudy_rain.png",
        55: "/icons/cloudy_rain.png",
        61: "/icons/cloudy_rain.png",
        63: "/icons/cloudy_rain.png",
        65: "/icons/cloudy_rain.png",
        71: "/icons/cloudy_rain.png",
        73: "/icons/cloudy_rain.png",
        75: "/icons/cloudy_rain.png",
        95: "/icons/cloudy_rain.png",
        96: "/icons/cloudy_rain.png",
        99: "/icons/cloudy_rain.png",
    };
    return map[code];
}

export function WeatherImage({weatherCode, size}) {
    return <CommonImage src={interpretWeatherCode(weatherCode)} size={size} />;
}