import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Data from './components/data';
import Feed from './components/feed';
import Form from './components/form';
import Login from './components/login';
import Home from './components/home';

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
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
