import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDts7pQO6O801gkLxwrwf_8uik8_64l8Lw",
  authDomain: "notlinkedin.firebaseapp.com",
  projectId: "notlinkedin",
  storageBucket: "notlinkedin.appspot.com",
  messagingSenderId: "388164336881",
  appId: "1:388164336881:web:fab1662b0e3bb1503b7d50",
  measurementId: "G-T0EKP6QMSF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
