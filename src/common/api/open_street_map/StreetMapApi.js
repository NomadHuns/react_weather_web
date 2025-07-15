import {baseGetAPI} from "../BaseAPI";

async function baseStreetMapApi(params) {
    return await baseGetAPI('https', 'nominatim.openstreetmap.org', '/reverse', params);
}

export async function getCountryAndCity(lat, lng) {
    const params = {
        format: 'json',
        lat: lat,
        lon: lng,
        'accept-language': 'en'
    };

    return await baseStreetMapApi(params);
}