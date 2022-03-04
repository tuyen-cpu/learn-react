import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, FacebookAuthProvider, signInWithPopup } from "firebase/auth";

import "firebase/auth";
import "firebase/firestore";
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
// const analytics = getAnalytics(app);
const fbProvider = new FacebookAuthProvider();

const auth = getAuth();
export { auth, fbProvider, signInWithPopup };
