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