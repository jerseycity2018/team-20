import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/935880969470533632/KprX4QLZ_400x400.jpg',
          }}
        />
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
  image: {
    width: 100,
    height: 100,
  },
});
