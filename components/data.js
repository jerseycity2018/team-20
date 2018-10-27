import React from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

export default class Data extends React.Component {
  chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  };
  render() {
    return (
      <View>
        <Text>Data Analytics</Text>
        <PieChart data={data} width={screenwidth} height={200} />
      </View>
    );
  }
}
