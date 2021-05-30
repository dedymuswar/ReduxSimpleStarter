import axios from 'axios'
const API_KEY = 'fac3ad9aa3e7cc2831da7dae7df9ce5f'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){

    const url = `${ROOT_URL}&q=${city}`
    const response = axios.get(url)

    // console.log('Request : ', response);
    return {
        type: FETCH_WEATHER,
        payload: response
    }
}