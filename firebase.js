import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD_SDXnHsp7T4FxSzroWm0Sm5_YmRK3Gw0",
  authDomain: "next-whatsapp-9f251.firebaseapp.com",
  projectId: "next-whatsapp-9f251",
  storageBucket: "next-whatsapp-9f251.appspot.com",
  messagingSenderId: "506553979884",
  appId: "1:506553979884:web:231687adb274c3f3e326c9",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
