import{ initializeApp}from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
    apiKey:import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
    authDomain:import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId:import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket:import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:import.meta.env.VITE_REACT_APP_FIREBASE_MESSEGING_SENDER_ID,
    appId:import.meta.env.VITE_REACT_APP_FIREBASE_API_ID,
    measurementId:import.meta.env.VITE_REACT_APP_FIREBASE_MEASUERMENT_ID
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const provider = new GoogleAuthProvider();
  const storage = getStorage();

  export{auth , db , provider , storage}