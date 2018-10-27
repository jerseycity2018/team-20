import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Data from "./components/data"
import Feed from "./components/feed"
import Form from "./components/form"
import Login from "./components/login"

const RootNavigator = createStackNavigator({

   Main: {
    screen: Home,
    navigationOptions: {
      headerTitle: "Main"
    }
  },
   Data: {
    screen: Data,
    navigationOptions: {
      headerTitle: "Data"
    }
  },
   Feed: {
    screen: Feed,
    navigationOptions: {
      headerTitle: "Feed"
    }
  },
   Form: {
    screen: Form,
    navigationOptions: {
      headerTitle: "Form"
    },
     Login: {
      screen: Login,
      navigationOptions: {
        headerTitle: "Login"
      },
    )};

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
