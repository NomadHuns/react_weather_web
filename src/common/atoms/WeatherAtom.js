import { atom } from 'recoil';

export const WeatherAtom = atom({
    key: 'WeatherAtom',
    default: {
        currentWeather: {
            weathercode: 1000,
            temperature: '-'
        },
        nextFourHoursWeather: [
            {
                time: '-',
                weathercode: 1000,
                temp: '-'
            },
            {
                time: '-',
                weathercode: 1000,
                temp: '-'
            },
            {
                time: '-',
                weathercode: 1000,
                temp: '-'
            },
            {
                time: '-',
                weathercode: 1000,
                temp: '-'
            },
        ]
    }
});