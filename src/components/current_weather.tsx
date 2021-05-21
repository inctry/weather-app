import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';


const CurrentWeather: React.FC<{currentWeather: any, city: string}> = (props) => {
  return (
    <View>
      <View>
        <Text>{props.city}</Text>
      </View>
      <View>
        <Text>{props.currentWeather.type}</Text>
      </View>
      <View style={styles.flex}>
        <View>
          <Text>{props.currentWeather.week}  今天</Text>
        </View>
        <View style={styles.flex}>
          <View style={styles.temprature}>
            <Text style={styles.tempratureFont}>{props.currentWeather.high.substring(3, 5)} </Text>
          </View>
          <View>
            <Text style={styles.tempratureFont}>{props.currentWeather.low.substring(3, 5)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  temprature: {
    marginRight: 20, 
  },
  tempratureFont: {
    fontSize: 16
  }
})
export default CurrentWeather;