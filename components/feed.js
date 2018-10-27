import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

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
    const allPosts = this.state.allPosts;
    return (
      <View>
        {/* <Text>Feed</Text>
        <Image
          style={{ width: 66, height: 58 }}
          source={{
            uri:
              'https://images-na.ssl-images-amazon.com/images/I/71WGWTtJfIL._SX425_.jpg',
          }}
        /> */}
        <ScrollView>
          {allPosts.length === 0 ? (
            <View>
              <Text> Loading... </Text>
            </View>
          ) : (
            allPosts.map(post => {
              return (
                <View>
                  <Text>{post.actionType}</Text>
                </View>
              );
            })
          )}
        </ScrollView>
      </View>
    );
  }
}
