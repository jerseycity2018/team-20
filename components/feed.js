import React from 'react';
import { View, Text, Image } from 'react-native';

export default class Feed extends React.Component {
  render() {
    return (
      <View>
        <Text>Feed</Text>
        <Image
          style={{ width: 66, height: 58 }}
          source={{
            uri:
              'https://images-na.ssl-images-amazon.com/images/I/71WGWTtJfIL._SX425_.jpg',
          }}
        />
      </View>
    );
  }
}
