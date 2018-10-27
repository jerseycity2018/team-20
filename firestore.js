const firebaseLib = require('firebase');
require('firebase/firestore');
require('firebase/auth');

var config = {
  apiKey: '',
  authDomain: 'team-20-49fc5.firebaseapp.com',
  databaseURL: 'https://team-20-49fc5.firebaseio.com',
  projectId: 'team-20-49fc5',
  storageBucket: 'team-20-49fc5.appspot.com',
  messagingSenderId: '825469520540',
};

export const firebase = firebaseLib.initializeApp(config);
const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);


export default db;
