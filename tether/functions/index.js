const functions = require('firebase-functions');
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onCall((request, response) => {
//  return ("Hello from Firebase!");
// });
  
  const firebaseConfig = {
    apiKey: functions.config().someservice.apikey,
    authDomain: functions.config().someservice.authdomain,
    databaseURL: functions.config().someservice.databaseurl,
    projectId: functions.config().someservice.projid,
    storageBucket: functions.config().someservice.storagebucket,
    messagingSenderId: functions.config().someservice.messagingsenderid,
    appId: functions.config().someservice.appid,
    measurementId: functions.config().someservice.measurementid
  };
  
  admin.initializeApp(firebaseConfig);