import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/weather?=&appid=e448ccbaa82f56aec00f587b2e251687';
const API_Key = 'e448ccbaa82f56aec00f587b2e251687';

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_Key,
      
    }
  });
  return data;
}