/*
Script will run when given the apikey and other config vars
-goes through json from dd.json and inputs into firebase

const firebase = require('firebase');
require('firebase/auth');

firebase.initializeApp(config);
const db = firebase.firestore();
*/

var testData = require('./dd.json');
var fs = require('fs');
var len=testData.length;

var batch = db.batch();
for(var i = 0; i<len; i++) {
    var myKeyRef = db.collection('action').doc();
    testData[i]['date']=Date.now();
    batch.set(myKeyRef, testData[i]);
}

batch.commit().then(function () {
    response.send({
    'fulfillmentText': `Success!!!`
    });
});