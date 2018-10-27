import React from 'react'

export default class SignUp extends React.Component{
  constructor(){
    super();
    this.state = {
      email: '',
      password:'',
      firstName:'',
      lastName:'',
      development:'',
    }
    this.signUpUser = this.signUpUser.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  async signUpUser(email, password){
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const currentUser = await firebase.auth().currentUser;
      return currentUser.uid;
    } catch (err) {
      console.log(err.toString());
    }
  }

  async createUser(id){
    await db.collection('users').doc(id).set(this.state);
  }

  render(){
    
  }

}
