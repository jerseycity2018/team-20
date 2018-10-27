import React from 'react';
import { Image } from 'react-native';
import { Footer, FooterTab, Button, View } from 'native-base';
import styles from './styleSheet';

export default class Navbar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Footer style={styles.navbar}>
          <FooterTab>
            <Button
              onPress={() => {
                this.props.navigation.navigate('Feed');
              }}
            >
              <Image
                source={{
                  uri: 'https://static.thenounproject.com/png/267272-200.png',
                }}
                style={{ width: 50, height: 50 }}
              />
            </Button>
            <Button
              onPress={() => {
                this.props.navigation.navigate('Form');
              }}
            >
              <Image
                source={{
                  uri:
                    'https://cdn3.iconfinder.com/data/icons/interaction-design/512/Form2-512.png',
                }}
                style={{ width: 50, height: 50 }}
              />
            </Button>
            <Button
              onPress={() => {
                this.props.navigation.navigate('Data');
              }}
            >
              <Image
                source={{
                  uri:
                    'https://i.pinimg.com/originals/04/fe/7b/04fe7bf70776ed9cb2d2c9bf570d23f4.png',
                }}
                style={{ width: 50, height: 50 }}
              />
            </Button>
            <Button
              onPress={() => {
                this.props.navigation.navigate('CalendarView');
              }}
            >
              <Image
                source={{
                  uri:
                    'https://image.freepik.com/free-icon/hanging-calendar-interface-tool-symbol_318-58238.jpg',
                }}
                style={{ width: 50, height: 50 }}
              />
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}
