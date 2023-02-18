import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDkbOMdDh-iRQn5iP5fCwECteLPhb1ERug",
    authDomain: "red-onion-f7b01.firebaseapp.com",
    projectId: "red-onion-f7b01",
    storageBucket: "red-onion-f7b01.appspot.com",
    messagingSenderId: "1036945815885",
    appId: "1:1036945815885:web:00a841a31e938ff2305f04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)


export default auth;