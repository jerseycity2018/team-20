import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from 'native-base';

export default class Home extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <View style={styles.image}>
          <Image
            style={styles.imageSize}
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/935880969470533632/KprX4QLZ_400x400.jpg',
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            full
            light
            onPress={() => this.props.navigation.navigate('LogIn')}
            title="Log In"
          >
            <Text>Log In</Text>
          </Button>
          <Button
            full
            light
            onPress={() => this.props.navigation.navigate('SignUp')}
            title="Sign Up"
          >
            <Text>Sign Up</Text>
          </Button>
          {/* <Button
            onPress={() => this.props.navigation.navigate('Form')}
            title="Form"
          />
          <Button
            onPress={() => this.props.navigation.navigate('Feed')}
            title="Feed"
          /> */}
          {/* <Button
            onPress={() => this.props.navigation.navigate('Data')}
            title="Data"
          />
          <Button
            onPress={() => this.props.navigation.navigate('CalendarView')}
            title="Calendar"
          /> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: 75,
    paddingBottom: 500,
    backgroundColor: 'white',
  },
  imageSize: {
    width: 200,
    height: 200,
  },
  image: {
    alignItems: 'center',
    paddingTop: 100,
  },
});
