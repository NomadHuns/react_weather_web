import {getNextHourRoundedTime} from "./TimeUtil";
import dayjs from "dayjs";

export function getNextFourHoursWeather(data) {
    const formatted = getNextHourRoundedTime();
    const index = data.hourly.time.findIndex(time => time === formatted);
    const temps = data.hourly.temperature_2m.slice(index, index+4);
    const codes = data.hourly.weathercode.slice(index, index+4);
    const times = data.hourly.time.slice(index, index+4);

    const merged = times.map((time, idx) => ({
        time: dayjs(time).format('HH.mm'),
        weathercode: codes[idx],
        temp: temps[idx]
    }));

    return merged;
}

export function getWeeklyWeather(data) {
    const temps = data.daily.temperature_2m_max;
    const times = data.daily.time;

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return data.daily.weathercode.map((code, idx) => ({
        dayOfWeek: days[dayjs(times[idx]).day()],
        weathercode: code,
        temp: Math.round(temps[idx])
    }));
}

export function getMinAndMaxTemperatureToday(data) {
    if (
        !data?.daily?.temperature_2m_max?.length ||
        !data?.daily?.temperature_2m_min?.length
    ) {
        console.warn("온도 데이터가 부족합니다.");
        return { minTemperature: null, maxTemperature: null };
    }

    return {
        minTemperature: data.daily.temperature_2m_min[0],
        maxTemperature: data.daily.temperature_2m_max[0],
    };
}