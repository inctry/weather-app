import React, { useState } from 'react';
import WeatherForecastDay from '../components/weather_forecast_day';
import axios from 'axios';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CurrentWeather from '../components/current_weather';

const WeatherPage: React.FC<{}> = () => {
  const [list, setList] = useState<Array<{}> >([]);
  const [currentWeather, setCurrentWeather] = useState<{}>({});
  const [city, setCity] = useState<string>('');
  const [isShow, setIsShow] = useState<boolean>(false);
  axios.get('http://t.weather.itboy.net/api/weather/city/101120201')
  .then((res) => {
    console.log(JSON.stringify(res.data));
    const data = JSON.parse(JSON.stringify(res.data));
    const status = data.status;
    if(status === 200) {
      const forecastList: Array<Object> = data.data.forecast.slice(1);
      setCurrentWeather(forecastList[0]);
      setCity(data.cityInfo.city);
      setList(forecastList);
      setIsShow(true);
    }
  });
  return (
    <View>
      {
        isShow && 
        <View style={{margin: 10}}>
          <CurrentWeather currentWeather={ currentWeather } city={city} />
          <WeatherForecastDay list={ list } />
        </View>
      }
    </View>
  );
}

export default WeatherPage;