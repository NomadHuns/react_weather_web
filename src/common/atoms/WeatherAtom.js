import { atom } from 'recoil';

export const WeatherAtom = atom({
    key: 'WeatherAtom',
    default: {
        currentWeather: {
            weathercode: 1000,
            temperature: '-'
        },
    }
});