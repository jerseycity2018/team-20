import React from 'react';
import { View, Text } from 'react-native';
import {PieChart} from 'react-native-chart-kit'

export default class Data extends React.Component {
  render() {
    return (
      <View>
        <Text>Data Analytics</Text>
        <PieChart
          data = {data}
          width = {screenwidth}
          height = {200}
        />
      </View>
    );
  }
}
