import React from 'react';
import { Image } from 'react-native';
import { Container, Form, Input, Item, Button, Label, Text } from 'native-base';
const firebase = require('firebase');

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.loginUser = this.loginUser.bind(this);
  }

  loginUser(email, password) {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('Feed'));
    } catch (error) {
      console.log(error.toString());
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong Password');
      } else {
        alert(errorMessage);
      }
    }
  }

  render() {
    const navigation = this.props.navigation;

    return (
      <Container style={{ paddingBottom: 100 }}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              clearButtonMode="always"
              onChangeText={email => {
                this.setState({ email });
              }}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              clearButtonMode="always"
              secureTextEntry={true}
              onChangeText={password => {
                this.setState({ password });
              }}
            />
          </Item>
          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={() => {
              this.loginUser(this.state.email, this.state.password);
            }}
          >
            <Text style={{ color: 'white' }}>Log in</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}
