import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import {
  PieChart,
  LineChart,
  ProgressChart,
  BarChart,
} from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;

export default class Data extends React.Component {
  constructor() {
    super();
  }
  render() {
    const chartConfig = {
      backgroundGradientFrom: '#1E2923',
      backgroundGradientTo: '#08130D',
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    };
    const data = [
      {
        development: 'Adam_1',
        quantity: 3000,
        color: 'rgba(131, 167, 234, 1)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        development: 'Andrew_2',
        quantity: 4340,
        color: '#F00',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        development: 'Bethany_3',
        quantity: 412,
        color: 'red',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        development: 'Woke_1',
        quantity: 7500,
        color: '#ffffff',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        development: 'Moscow_1',
        quantity: 800,
        color: 'rgb(0, 0, 255)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
    ];

    return (
      <View>
        <Text>Data Analytics</Text>
        {/* <LineChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        /> */}
        <PieChart
          width={screenWidth}
          data={data}
          height={200}
          chartConfig={chartConfig}
          accessor="quantity"
          backgroundColor="transparent"
          paddingLeft="15"
        />
        {/* <ProgressChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        /> */}
        {/* <BarChart
          style={graphStyle}
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        /> */}
      </View>
    );
  }
}
