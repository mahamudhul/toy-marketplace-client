// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALnUQ8kq5lrGBOKKK8hMJ4SVj4t7b71n8",
  authDomain: "toy-marketplace-client-ce63e.firebaseapp.com",
  projectId: "toy-marketplace-client-ce63e",
  storageBucket: "toy-marketplace-client-ce63e.appspot.com",
  messagingSenderId: "17982343241",
  appId: "1:17982343241:web:4a063e5fd25300a8781798"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;