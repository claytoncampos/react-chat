import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyCxJWMK40x6cbS6ogDs9WKFQf3su43YXFU',
    authDomain: 'react-chat-933d9.firebaseapp.com',
    projectId: 'react-chat-933d9',
    storageBucket: 'react-chat-933d9.appspot.com',
    messagingSenderId: '857045372845',
    appId: '1:857045372845:web:c604792c9b4904b1ee5b24',
  })
  .auth();
