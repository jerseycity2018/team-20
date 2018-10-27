import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
        <View styles={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('LogIn')}
            title="Log In"
          />
          <Button
            onPress={() => this.props.navigation.navigate('SignUp')}
            title="Sign Up"
          />
          <Button
            onPress={() => this.props.navigation.navigate('Form')}
            title="Form"
          />
          <Button
            onPress={() => this.props.navigation.navigate('Feed')}
            title="Feed"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 100,
    backgroundColor: 'white',
  },
});
