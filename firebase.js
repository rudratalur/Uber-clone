
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAuOrHl9yTPfQAClfi3S6nuGlnTKxMO-DA",
  authDomain: "uber-next-clone-c4912.firebaseapp.com",
  projectId: "uber-next-clone-c4912",
  storageBucket: "uber-next-clone-c4912.appspot.com",
  messagingSenderId: "990269011292",
  appId: "1:990269011292:web:73f59ef8a84a5614573d99"
};


const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }
