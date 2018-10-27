import React, { Component } from 'react';
import { Button } from 'react-native';
import { Text, View } from 'react-native';

export default class FormPage extends React.Component {
    constructor{
        super();
        this.state={
            action="",
            quantity="",
        }
    }
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Text>Form</Text>
                <Picker
                    selectedValue={this.state.action}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                    <Picker.Item label="Recycle" value="recycle" />
                    <Picker.Item label="Donated Compost" value="donate" />
                    <Picker.Item label="Volunteer" value="volunteer" />
                </Picker>
                <Text>Quantity</Text> <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(Quantity) => this.setState({ Quantity })}
                    value={this.state.Quantity}/>
                <Button
                    onPress={onPressSubmit}
                    title="Submit"
                    color=""
                    accessibilityLabel="Submit Form"
                />
            </View>
                    
        );
    }
}
