import React, { Component } from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
} from 'react-native-elements';
import db from '../firestore';
import { Container, Content, Picker } from 'native-base';

export default class FormPage extends React.Component {
  constructor() {
    super();

    this.state = {
      action: 'recycl',
      quantity: '',
      // selectedItem: undefined,
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
    var postData = {
      actionType: this.state.action,
      date: new Date(),
      development: this.state.development,
      email: 'this.state.quantity',
      picture: '',
      quantity: this.state.quantity,
      //createObj;
    };
    var newPostKey = db
      .collection('action')
      .doc()
      .set(postData);
  }

  // async createObj(){
  //   await db.collection('action').doc().set(this.state)
  // }

  render() {
    return (
      //<View style = {{paddingTop = 300}}
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'white',
          paddingTop: 324,
          paddingBottom: 250,
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
          // style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={quantity =>
            this.setState({
              quantity,
            })
          }
          value={this.state.quantity}
        />{' '}
        <Button
          onPress={this.onSubmit}
          title="Submit"
          // color=""
          accessibilityLabel="Submit Form"
        />
      </View>
      //>
    );
  }
}
