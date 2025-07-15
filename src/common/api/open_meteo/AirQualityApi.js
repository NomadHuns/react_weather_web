import {baseGetAPI} from "../BaseAPI";

async function baseAirQualityAPI(params) {
    return await baseGetAPI('https', 'air-quality-api.open-meteo.com', '/v1/air-quality', params);
}

export async function getAirQuality(lat, lng) {
    const params = {
        latitude: lat,
        longitude: lng,
        hourly: 'pm10,pm2_5,european_aqi',
        timezone: 'Asia/Seoul',
        forecast_days: 1
    };

    return await baseAirQualityAPI(params);
}