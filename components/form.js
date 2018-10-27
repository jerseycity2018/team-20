import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
} from 'react-native-elements';
import db from '../firestore';
import { Container, Content, Picker, Button } from 'native-base';
import { firebase } from '../firestore';
export default class FormPage extends React.Component {
  constructor() {
    super();

    this.state = {
      action: 'recycl',
      quantity: '',
      selected1: 'recycl',
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  updateAction = newAction => {
    this.setState({
      action: newAction,
    });
  };
  updateQuantity = newQuantity => {
    this.setState({
      quantity: newQuantity,
    });
  };

  onSubmit() {
    var user = firebase.auth().currentUser;
    var postData = {
      actionType: this.state.action,
      date: new Date(),
      development: this.state.development,
      email: user.email,
      picture: '',
      quantity: this.state.quantity,
    };
    var newPostKey = db
      .collection('action')
      .doc()
      .set(postData);
  }

  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'white',
          paddingTop: 150,
          paddingBottom: 300,
        }}
      >
        <FormLabel> Housing Complex </FormLabel>{' '}
        <FormInput
          // style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={development =>
            this.setState({
              development,
            })
          }
          value={this.state.development}
        />
        <FormLabel> Pick Action </FormLabel>{' '}
        <Picker
          selectedValue={this.state.action}
          style={{
            height: 50,
            width: 100,
          }}
          onValueChange={this.updateAction}
        >
          <Picker.Item label="Recycle" value="recycl" />
          <Picker.Item label="Donated Compost" value="donate" />
          <Picker.Item label="Volunteer" value="volunteer" />
        </Picker>
        <FormLabel> Quantity </FormLabel>{' '}
        <FormInput
          onChangeText={quantity =>
            this.setState({
              quantity,
            })
          }
          value={this.state.quantity}
        />{' '}
        {/* <View style={{ paddingTop: 40 }}> */}
        <Button
          full
          light
          onPress={this.onSubmit}
          title="Submit"
          // color=""
          accessibilityLabel="Submit Form"
        >
          <Text>Submit</Text>
        </Button>
        {/* </View> */}
      </View>
      //>
    );
  }
}
