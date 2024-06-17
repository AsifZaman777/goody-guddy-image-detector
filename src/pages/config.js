import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDWKoNjJhdrnScwjjoPN3or6RXUVDHPdlI",
  authDomain: "gg-image-detection.firebaseapp.com",
  projectId: "gg-image-detection",
  storageBucket: "gg-image-detection.appspot.com",
  messagingSenderId: "688771129184",
  appId: "1:688771129184:web:8d775c4617283f43bc0805",
  measurementId: "G-RMDYTLW4N1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, provider, storage, db};

