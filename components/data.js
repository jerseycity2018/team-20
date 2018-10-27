import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import {
  PieChart,
  LineChart,
  ProgressChart,
  BarChart,
} from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;

import db from '../firestore';

export default class Data extends React.Component {
  constructor() {
    super();
    this.state = {
      allPosts: [],
      actionVal: 'volunteer',
      top5: [],
    };
    //    this.allPosts = this.allPosts.bind(this);
  }

  async getPosts() {
    const allThePosts = await db
      .collection('action')
      .orderBy('actionType')
      .equalTo(this.state.actionVal);
    const arr = [];
    await allThePosts.get().then(docsArr => {
      docsArr.forEach(doc => {
        arr.push(doc.data());
      });
    });
    this.setState({ allPosts: arr });
  }

  async alphabetizeByDev() {
    this.state.allPosts.sort(function(a, b) {
      if (a.development < b.development) {
        return -1;
      }
      if (a.development > b.development) {
        return 1;
      }
      return 0;
    });
  }

  async getTop5() {
    var sums = [];
    var temp = this.state.allPosts[0].development;
    var count = 0;
    var five = [];
    this.state.allPosts.forEach(doc => {
      if (temp == doc.development) {
        count += doc.quantity;
      } else {
        sum.push({ sum: count, dev: temp });
        temp = doc.development;
        count = doc.quantity;
      }
    });
    sum.sort(function(a, b) {
      return b.sum - a.sum;
    });
    for (var i = 0; i < 5; i++) {
      five.push(sum[i]);
    }
    this.setState({ top5: five });
  }

  render() {
    const chartConfig = {
      backgroundGradientFrom: '#1E2923',
      backgroundGradientTo: '#08130D',
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    };

    data = [
      {
        name: this.state.top5[0].dev,
        quantity: this.state.top5[0].sum,
        color: 'rgba(131, 167, 234, 1)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: this.state.top5[1].dev,
        quantity: this.state.top5[1].sum,
        color: '#F00',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: this.state.top5[2].dev,
        quantity: this.state.top5[2].sum,
        color: 'red',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: this.state.top5[3].dev,
        quantity: this.state.top5[3].sum,
        color: '#ffffff',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: this.state.top5[4].dev,
        quantity: this.state.top5[4].sum,
        color: 'rgb(0, 0, 255)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
    ];

    return (
      <View>
        <Text>Data Analytics </Text>
        <PieChart
          width={screenWidth}
          data={data}
          height={200}
          chartConfig={chartConfig}
          accessor="quantity"
          backgroundColor="transparent"
          paddingLeft="15"
        />
      </View>
    );
  }
}
