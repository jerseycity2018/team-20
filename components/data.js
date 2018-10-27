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
      actionVal: "volunteer",
      top5: [],
    };
//    this.allPosts = this.allPosts.bind(this);
  }

/*  async getPosts() {
    const allThePosts = await db.collection('action').orderBy('actionType').equalTo(this.state.actionVal);
    const arr = [];
    await allThePosts.get().then(docsArr => {
      docsArr.forEach(doc => {
        arr.push(doc.data());
      });
    });
    this.setState({allPosts: arr });
  }

  async alphabetizeByDev(){
    this.state.allPosts.sort(function(a,b){
      if(a.development < b.development) {return -1;}
      if(a.development > b.development) {return 1;}
      return 0;
    })
  }

  async getTop5(){
    var sums = [];
    var temp = this.state.allPosts[0].development;
    var count = 0;
    var five = [];
    this.state.allPosts.forEach(doc => {
      if(temp==doc.development){
        count += doc.quantity;
      }else{
        sums.push({sum: count, dev: temp});
        temp = doc.development;
        count = doc.quantity;
      }
    })
    sums.sort(function(a,b){return b.sum-a.sum});
    for (var i = 0; i < 5; i++) {
       five.push(sums[i]);
    }
    this.setState({top5: five});
  }
*/
  render() {
    //get dimensions of screen
    screenWidth = Dimensions.get('window').width
    //create standard chart configurations for each
    chartConfig = {
      backgroundGradientFrom: '#1E2923',
      backgroundGradientTo: '#08130D',
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    };

    //ALL PROPERTIES ARE DOCUMENTED UNDER react-native-chart-kit repository
    //data for compost
    data = [
      {
        name: 'Baychester',
        quantity: 129,
        color: '#8e41f4',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'Forest',
        quantity: 97,
        color: '#41f48b',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'Bay View',
        quantity: 79,
        color: '#f4cd41',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'Amsterdan Addition',
        quantity: 67,
        color: '#f46b41',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'Armstrong II',
        quantity: 79,
        color: '#4286f4',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
    ];
    // data for recycle
    data2 = {
        labels: ['Baruch', 'Adams', 'Armstrong I', 'Albany II', 'Jefferson'],
        datasets: [{
          data: [ 40, 85, 32, 77, 23]
        }]
    }

    // data for volunteer hours
    data3 = [
      {
        name: 'Allen Street',
        quantity: 29,
        color: '#721825',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'Albany II',
        quantity: 107,
        color: '#5b0952',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'Ingersoll',
        quantity: 49,
        color: '#342770',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'Astoria',
        quantity: 87,
        color: '#41989b',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'Armstrong II',
        quantity: 19,
        color: '#274736',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
    ];

    return(
      <View>
        <Text>Data Analytics </Text>

        //Below are pie charts and bar charts to visualize analytical data
        <PieChart
          width={screenWidth}
          data={data}
          height={200}
          chartConfig={chartConfig}
          accessor="quantity"
          backgroundColor="transparent"
          paddingLeft="15"/>

        <BarChart
          style={graphStyle}
          data={data2}
          width={screenWidth}
          height={200}
          chartConfig={chartConfig}
        />

        <PieChart
          width={screenWidth}
          data={data}
          height={200}
          chartConfig={chartConfig}
          accessor="quantity"
          backgroundColor="transparent"
          paddingLeft="15"/>
      </View>
    );
  }
}
