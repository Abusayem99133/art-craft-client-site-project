
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCXBUR_kz1d2PHWz3ySigmBgtNnYeJja4g",
  authDomain: "my-art-craft-project.firebaseapp.com",
  projectId: "my-art-craft-project",
  storageBucket: "my-art-craft-project.appspot.com",
  messagingSenderId: "809037537631",
  appId: "1:809037537631:web:e840207e7fe7198c36d6ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth