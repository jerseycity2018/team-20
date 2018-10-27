import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styleSheet';

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
      <View style={styles.feedContainer}>
        <ScrollView>
          {allPosts.length === 0 ? (
            <View>
              <Text> Loading... </Text>
            </View>
          ) : (
            allPosts.map(post => {
              return (
                <View style={styles.info} key={post.email}>
                  <Text style={styles.font}>{post.actionType}</Text>
                  <Text style={styles.font}>{post.development}</Text>
                  <Text style={styles.font}>{post.quantity}</Text>
                  <Image
                    style={{ width: 200, height: 200 }}
                    source={{ uri: post.picture }}
                  />
                </View>
              );
            })
          )}
        </ScrollView>
      </View>
    );
  }
}

console.disableYellowBox = true;
