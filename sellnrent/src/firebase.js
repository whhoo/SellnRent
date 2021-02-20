import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const app = firebase.initializeApp({
    apiKey: 'AIzaSyCXC5690X8TrnOtZfTHLhDGWThMwBm4DtU',
    authDomain: 'sellnrent-308a6.firebaseapp.com',
    projectId: 'sellnrent-308a6',
    storageBucket: 'sellnrent-308a6.appspot.com',
    messagingSenderId: '740814000041',
    appId: '1:740814000041:web:e9afd9bfd9a3570c61beb8',
    measurementId: 'G-QPL4W1QFB0'
});

export const auth = app.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export default app;