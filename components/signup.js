import React from 'react';
import { Container, Form, Item, Label, Input, Button } from 'native-base';
import { Text } from 'react-native';
const firebase = require('firebase');
import db from '../firestore';

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      development: '',
    };
    this.signUpUser = this.signUpUser.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  async signUpUser(email, password) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const currentUser = await firebase.auth().currentUser;
      return currentUser.uid;
    } catch (err) {
      console.log(err.toString());
    }
  }

  async createUser(id) {
    await db
      .collection('users')
      .doc(id)
      .set(this.state);
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <Form>
          <Item floatingLabel>
            <Label>First Name</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              clearButtonMode="always"
              onChangeText={firstName => this.setState({ firstName })}
            />
          </Item>
          <Item floatingLabel>
            <Label>Last Name</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              clearButtonMode="always"
              onChangeText={lastName => this.setState({ lastName })}
            />
          </Item>
          <Item floatingLabel>
            <Label>Development</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              clearButtonMode="always"
              onChangeText={development => this.setState({ development })}
            />
          </Item>
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
          {!this.state.email.includes('@' && '.') &&
          this.state.email.length > 0 ? (
            <Text style={styles.errorMessage}>
              Please enter a valid email address
            </Text>
          ) : null}
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
          {this.state.password.length < 6 && this.state.password.length > 0 ? (
            <Text style={styles.errorMessage}>
              Password must be at least 6 characters
            </Text>
          ) : null}

          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={async () => {
              const id = await this.signUpUser(
                this.state.email,
                this.state.password
              );
              this.createUser(id).then(() => navigation.navigate('Feed'));
            }}
          >
            <Text style={{ color: 'white' }}>Sign Up</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}
