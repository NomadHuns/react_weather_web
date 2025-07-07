import { atom } from 'recoil';

export const WeatherAtom = atom({
    key: 'WeatherAtom',
    default: {
        currentWeather: {
            weathercode: 1000,
            temperature: '-',
            minTemperature: '-',
            maxTemperature: '-',
            sunrise: '- AM',
            sunset: '- PM',
            uv: '-',
            airQuality: '',
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
        ],
        weeklyWeather: [
            {
                dayOfWeek: '-',
                weathercode: 1000,
                temp: '-',
            },
            {
                dayOfWeek: '-',
                weathercode: 1000,
                temp: '-',
            },
            {
                dayOfWeek: '-',
                weathercode: 1000,
                temp: '-',
            },
            {
                dayOfWeek: '-',
                weathercode: 1000,
                temp: '-',
            },
            {
                dayOfWeek: '-',
                weathercode: 1000,
                temp: '-',
            },
            {
                dayOfWeek: '-',
                weathercode: 1000,
                temp: '-',
            },
            {
                dayOfWeek: '-',
                weathercode: 1000,
                temp: '-',
            }
        ]
    }
});