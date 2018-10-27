import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
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
                  <Text style={styles.font}>
                    I {post.actionType}
                    ed!
                  </Text>
                  <Image
                    style={{ width: 200, height: 200 }}
                    source={{ uri: post.picture }}
                  />
                  <TouchableOpacity
                    style={{ paddingTop: 10 }}
                    onPress={() => {}}
                  >
                    <Image
                      style={{ width: 40, height: 40 }}
                      source={{
                        uri:
                          'https://www.inflexxion.com/wp-content/uploads/2018/05/Thumbs-up-icon.png',
                      }}
                    />
                  </TouchableOpacity>
                  <Text style={styles.font}>{post.development}</Text>
                  {post.actionType === 'volunteer' ? (
                    <Text style={styles.font}>{post.quantity} hours</Text>
                  ) : (
                    <Text style={styles.font}>{post.quantity} bags</Text>
                  )}
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
