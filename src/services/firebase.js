// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyCrN690FmJx59wbHMJFrrEBya0wg-c2PGk',
//   authDomain: 'shuffle-words-5da73.firebaseapp.com',
//   projectId: 'shuffle-words-5da73',
//   storageBucket: 'shuffle-words-5da73.appspot.com',
//   messagingSenderId: '188761856750',
//   appId: '1:188761856750:web:bdac110535f94ec0bd31ff',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// hatadan sonraki -------------------------------------------------------------------------
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCrN690FmJx59wbHMJFrrEBya0wg-c2PGk',
  authDomain: 'shuffle-words-5da73.firebaseapp.com',
  projectId: 'shuffle-words-5da73',
  storageBucket: 'shuffle-words-5da73.appspot.com',
  messagingSenderId: '188761856750',
  appId: '1:188761856750:web:bdac110535f94ec0bd31ff',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
// const emailPasswordProvider = new firebase.auth.EmailAuthProvider();

export { auth, db, googleProvider };

export default firebase;
