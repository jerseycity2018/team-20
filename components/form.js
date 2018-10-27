import React, { Component } from 'react';
import { Button, Text, View, Picker, TextInput } from 'react-native';

export default class FormPage extends React.Component {
  constructor() {
    super();
    this.state = {
      action: '',
      quantity: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  updateAction = newAction => {
    this.setState({ action: newAction });
  };
  updateQuantity = newQuantity => {
    this.setState({ quantity: newQuantity });
  };

  onSubmit() {
    console.log('Action is: ' + this.state.action);
    console.log('Quantity is: ' + this.state.quantity);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}
      >
        <Text>Form</Text>

        <Picker
          selectedValue={this.state.action}
          style={{ height: 50, width: 100 }}
          onValueChange={this.updateAction}
        >
          <Picker.Item label="Recycle" value="recycle" />
          <Picker.Item label="Donated Compost" value="donate" />
          <Picker.Item label="Volunteer" value="volunteer" />
        </Picker>
        <Text>Quantity</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={quantity => this.setState({ quantity })}
          value={this.state.quantity}
        />
        <Button
          onPress={this.onSubmit}
          title="Submit"
          // color=""
          accessibilityLabel="Submit Form"
        />
      </View>
    );
  }
}
