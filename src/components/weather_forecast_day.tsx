import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const WeatherForecastDay: React.FC<{list: Array<Object>}> = (props) => {
  
  return (
    <View>
      {
        props.list.map((item: any, index: number) => {
          return (
            <View style={styles.container} key={index}>
              <Text>{item.week}</Text>
              <Text>{}</Text>
              <View style={styles.container}>
                <View style={{marginRight: 30}}>
                  <Text>{item.high.substring(3, 5)}</Text>
                </View>
                <View>
                  <Text>{item.low.substring(3, 5)}</Text>
                </View>
              </View>
            </View>
          ); 
        })
      }
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row", 
    justifyContent: "space-between"
  },
  temprature: {
    marginRight: 20
  },
  element: {
    flex: 1
  }
}) 
export default WeatherForecastDay;