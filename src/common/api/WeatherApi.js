import {baseGetAPI} from "./BaseAPI";

async function baseWeatherAPI(params) {
    return await baseGetAPI('https', 'api.open-meteo.com', '/v1/forecast', params);
}

export async function getTodayWeatherByLocation(lat, lng) {
    const params = {
        latitude: lat,
        longitude: lng,
        current_weather: true,
        timezone: 'Asia/Seoul',
    };

    return await baseWeatherAPI(params);
}

export async function getWeatherByLocation(lat, lng) {
    const params = {
        latitude: lat,
        longitude: lng,
        hourly: 'temperature_2m,weathercode',
        timezone: 'Asia/Seoul',
    };

    return await baseWeatherAPI(params);
}

export async function getWeeklyWeatherByLocation(lat, lng) {
    // 오늘 날짜
    const today = new Date();
    const startDate = today.toISOString().split('T')[0];

    // 7일 후 날짜
    const endDate = new Date(today);
    endDate.setDate(endDate.getDate() + 6); // 오늘 포함 7일치
    const endDateStr = endDate.toISOString().split('T')[0];

    const params = {
        latitude: lat,
        longitude: lng,
        daily: 'temperature_2m_max,temperature_2m_min,weathercode,sunrise,sunset,uv_index_max',
        timezone: 'Asia/Seoul',
        start_date: startDate,
        end_date: endDateStr,
    };

    return await baseWeatherAPI(params);
}