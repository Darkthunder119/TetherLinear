import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

// const {
//   REACT_APP_API_KEY,
//   REACT_APP_AUTH_DOMAIN,
//   REACT_APP_DATABASE_URL,
//   REACT_APP_PROJECT_ID,
//   REACT_APP_STORAGE_BUCKET,
//   REACT_APP_MESSAGING_SENDER_ID,
//   REACT_APP_APP_ID,
//   REACT_APP_MEASUREMENT_ID
// } = process.env;


axios.get('https://cors-anywhere.herokuapp.com/https://us-central1-tethermsft.cloudfunctions.net/uselessData')
.then(res=>{
  const { 
    apikey, 
    authdomain, 
    databaseurl, 
    projectid,
    storagebucket,
    messagingsenderId,
    appid,
    measurementid
  } = res.data.data.someservice

  const firebaseConfig = {
    apiKey: apikey,
    authDomain: authdomain,
    databaseURL: databaseurl,
    projectId: projectid,
    storageBucket: storagebucket,
    messagingSenderId: messagingsenderId,
    appId: appid,
    measurementId: measurementid,
  };

  firebase.initializeApp(firebaseConfig);

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
})
.catch(err=>console.log(err.message))





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
