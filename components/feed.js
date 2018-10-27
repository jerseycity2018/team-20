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
        <ScrollView>
          {allPosts.length === 0 ? (
            <View>
              <Text> Loading... </Text>
            </View>
          ) : (
            allPosts.map(post => {
              return (
                <View key={post.email}>
                  <Text>{post.actionType}</Text>
                  <Text>{post.development}</Text>
                  <Text>{post.quantity}</Text>
                  {/* <Text>{post.picture}</Text> */}
                  {/* <Text>{post.date.Date}</Text> */}
                </View>
              );
            })
          )}
        </ScrollView>
      </View>
    );
  }
}
