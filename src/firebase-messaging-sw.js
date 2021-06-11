importScripts('https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.7/firebase-messaging.js');
 
firebase.initializeApp({
    apiKey: "NOT SPECIFIED",
    authDomain: "cs-ionic-app.firebaseapp.com",
    projectId: "cs-ionic-app",
    storageBucket: "cs-ionic-app.appspot.com",
    messagingSenderId: "1059053761816",
    appId: "1:1059053761816:web:365d5d49ed079fcac6da6d"
});
 
const messaging = firebase.messaging();