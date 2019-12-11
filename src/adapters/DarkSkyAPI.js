import Keys from './Keys'

const DARK_SKY_KEY = Keys.REACT_APP_KEY_DARK_SKY
const DARK_SKY_API_ENDPOINT = "https://api.darksky.net/"
const FORECAST_ENDPOINT = `${DARK_SKY_API_ENDPOINT}forecast/`

const getWeatherData = (latitude, longitude, kickOffTime) => {
    return fetch(`${FORECAST_ENDPOINT}${DARK_SKY_KEY}/${latitude},${longitude},${kickOffTime}?exclude=minutely,hourly,daily,alerts,flags`)
    .then(resp => resp.json())
}

export default { getWeatherData }