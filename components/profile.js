import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styleSheet';

import {firebase} from '../firestore';

export default class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            user = firebase.auth().currentUser
        };
        this.user = this.user.bind(this);
    }

    render() {
        return (
           <View style={{ backgroundColor: 'white' }}>
                <Image
                style={styles.imageSize}
                source={{
                uri:
                    'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png',
                }}
                />
                <Text>
                    {user.firstName} {user.lastName}
                </Text>
                <Text>
                    {user.email}
                </Text>
                
           </View>
        )
    }
    

}