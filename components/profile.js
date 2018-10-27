import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styleSheet';

import { firebase } from '../firestore';

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
    };
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  async getUser() {
    let user = await firebase.auth().currentUser;
    await this.setState({ user: user });
  }
  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        {/* <Text>{this.state.user.email}</Text> */}
        <Image
          style={styles.imageSize}
          source={{
            uri:
              'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png',
          }}
        />
        <Text>{this.state.user.email}</Text>
      </View>
    );
  }
}
