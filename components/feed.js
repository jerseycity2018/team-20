import React from 'react';
import { View, Text, Image } from 'react-native';
import db from '../firestore';

export default class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      allPosts: [],
    };
    this.allPosts = this.allPosts.bind(this);
  }

  componentDidMount() {
    this.allPosts();
  }

  async allPosts() {
    const allThePosts = await db.collection('action');
    const arr = [];
    await allThePosts.get().then(docsArr => {
      docsArr.forEach(doc => {
        arr.push(doc.data());
      });
    });
    this.setState({ allPosts: arr });
  }

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
