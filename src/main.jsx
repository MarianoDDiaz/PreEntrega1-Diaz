import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaqrP3SDp-BaeyUCvoAd72TChr_NQS-4Q",
  authDomain: "bernabeu-4c9fb.firebaseapp.com",
  projectId: "bernabeu-4c9fb",
  storageBucket: "bernabeu-4c9fb.appspot.com",
  messagingSenderId: "439199594731",
  appId: "1:439199594731:web:eff6abb73536b95189e6ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore (app);



ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
    </ChakraProvider>

)
