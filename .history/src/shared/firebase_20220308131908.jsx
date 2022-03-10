import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAj-FN1FegNUc8-Qs4R5PxqKYTuCYj-KIQ',
  authDomain: 'image-community-357d3.firebaseapp.com',
  projectId: 'image-community-357d3',
  storageBucket: 'image-community-357d3.appspot.com',
  messagingSenderId: '809271010096',
  appId: '1:809271010096:web:e362e3866429de7abddef5',
  measurementId: 'G-5CPLCL40XP',
};

const apiKey = firebaseConfig.apiKey;
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const firestore = getFirestore();

export { firebaseApp, db, auth, apiKey, firestore };
