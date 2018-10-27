import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Data from './components/data';
import Feed from './components/feed';
import Form from './components/form';
import LogIn from './components/login';
import Home from './components/home';
import SignUp from './components/signup';
import CalendarView from './components/calendar';
import Profile from './components/profile';

const RootNavigator = createStackNavigator({
  Main: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Main',
    },
  },

  Data: {
    screen: Data,
    navigationOptions: {
      headerTitle: 'Data',
    },
  },

  Feed: {
    screen: Feed,
    navigationOptions: {
      headerTitle: 'Feed',
    },
  },

  Form: {
    screen: Form,
    navigationOptions: {
      headerTitle: 'Form',
    },
  },

  LogIn: {
    screen: LogIn,
    navigationOptions: {
      headerTitle: 'Log In',
    },
  },

  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerTitle: 'Sign Up',
    },
  },

  CalendarView: {
    screen: CalendarView,
    navigationOptions: {
      headerTitle: 'Calendar',
    },
  },

  Profile: {
    screen: Profile,
    navigationOptions: {
      headerTitle: 'Profile',
    },
  },
});

export default RootNavigator;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
