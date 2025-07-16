import {TimeUtil} from "../common/utils/TimeUtil";
import dayjs from "dayjs";

export class WeatherUtil {
    static getNextFourHoursWeather(data) {
        const formatted = TimeUtil.getNextHourRoundedTime();
        const index = data.hourly.time.findIndex(time => time === formatted);
        const temps = data.hourly.temperature_2m.slice(index, index+4);
        const codes = data.hourly.weathercode.slice(index, index+4);
        const times = data.hourly.time.slice(index, index+4);

        return times.map((time, idx) => ({
            time: dayjs(time).format('HH.mm'),
            weathercode: codes[idx],
            temp: temps[idx]
        }));
    }

    static getWeeklyWeather(data) {
        const temps = data.daily.temperature_2m_max;
        const times = data.daily.time;

        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        return data.daily.weathercode.map((code, idx) => ({
            dayOfWeek: days[dayjs(times[idx]).day()],
            weathercode: code,
            temp: Math.round(temps[idx])
        }));
    }

    static getMinAndMaxTemperatureToday(data) {
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

    static getUvIndex(uv) {
        const value = Math.floor(uv);

        switch (value) {
            case 0:
            case 1:
            case 2: return 'Low'
            case 3:
            case 4:
            case 5: return 'Moderate'
            case 6:
            case 7: return 'High'
            case 8:
            case 9:
            case 10: return 'Very High'
            default:
                if (value >= 11) return 'Dangerous';
                return '-';
        }
    }

    static getAirQualityIndex(airQuality) {
        if (typeof airQuality === "string") return airQuality;
        if (airQuality === '') return airQuality;
        if (airQuality >= 0 && airQuality < 20) {
            return 'Good';
        } else if (airQuality >= 20 && airQuality < 40) {
            return 'Fair';
        } else if (airQuality >= 40 && airQuality < 60) {
            return 'Moderate';
        } else if (airQuality >= 60 && airQuality < 80) {
            return 'Poor';
        } else if (airQuality >= 80 ) {
            return 'Very Poor';
        }
        return '-';
    }
}