// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHkztjKoORyb8G7pVDclXII3-LtdAJBDc",
  authDomain: "miloginde.firebaseapp.com",
  projectId: "miloginde",
  storageBucket: "miloginde.appspot.com",
  messagingSenderId: "491267311564",
  appId: "1:491267311564:web:355f9bc2cd878c4040ff69"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;