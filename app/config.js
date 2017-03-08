//config.js
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAck-yVROjMtoMQGT6jnRA0kflrCrzDfFc",
  authDomain: "skills-c4f93.firebaseapp.com",
  databaseURL: "https://skills-c4f93.firebaseio.com",
  storageBucket: "skills-c4f93.appspot.com",
  messagingSenderId: "200368377017"
};
firebase.initializeApp(config);
var rootRef = firebase.database().ref();