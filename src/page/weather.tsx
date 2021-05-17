import React, { useState } from 'react';
import WeatherForecastDay from '../components/weather_forecast_day';
import axios from 'axios';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Weather: React.FC<{}> = () => {
  const [list, setList] = useState<Array<Object> >([]);
  axios.get('http://t.weather.itboy.net/api/weather/city/101120201')
  .then((res) => {
    console.log(JSON.stringify(res.data));
    const data = JSON.parse(JSON.stringify(res.data));
    const status = data.status;
    if(status === 200) {
      const forecastList: Array<Object> = data.data.forecast;
      setList(forecastList);
    }
  });

  return (
    <View style={{margin: 10}}>
      <WeatherForecastDay currentList={list}></WeatherForecastDay>
    </View>
  );
}

export default Weather;