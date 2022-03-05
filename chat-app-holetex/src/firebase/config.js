import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import {
  getAuth,
  FacebookAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
  connectAuthEmulator,
} from "firebase/auth";

// import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDUFgCi_hZzmN7fIj6SqlZBhNCpXEcBFog",
  authDomain: "chat-app-holetex-e8cdf.firebaseapp.com",
  projectId: "chat-app-holetex-e8cdf",
  storageBucket: "chat-app-holetex-e8cdf.appspot.com",
  messagingSenderId: "747704597714",
  appId: "1:747704597714:web:c502c3ab00e7336eca410b",
  measurementId: "G-47QWL3EBEW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fbProvider = new FacebookAuthProvider();

const auth = getAuth();
const db = getFirestore();
connectAuthEmulator(auth, "http://localhost:9099");
if (window.location.hostname === "localhost") {
  connectFirestoreEmulator(db, "localhost", 8080);
}
const additionalUserInfo = getAdditionalUserInfo;

export { auth, fbProvider, signInWithPopup, additionalUserInfo, db };
