import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

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
            onPress={() => this.props.navigation.navigate('LogIn')}
            title="Log In"
          />
          <Button
            onPress={() => this.props.navigation.navigate('SignUp')}
            title="Sign Up"
          />
          {/* <Button
            onPress={() => this.props.navigation.navigate('Form')}
            title="Form"
          />
          <Button
            onPress={() => this.props.navigation.navigate('Feed')}
            title="Feed"
          />
          <Button
            onPress={() => this.props.navigation.navigate('Data')}
            title="Data"
          /> */}
          <Button
            onPress={() => this.props.navigation.navigate('CalendarView')}
            title="Calendar"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: 50,
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
