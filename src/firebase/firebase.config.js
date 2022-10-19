import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4t36LLOwR77P8o_OHIYWhuvd6ptCBloM",
  authDomain: "ielts-bangladesh.firebaseapp.com",
  projectId: "ielts-bangladesh",
  storageBucket: "ielts-bangladesh.appspot.com",
  messagingSenderId: "37220835231",
  appId: "1:37220835231:web:7a18a0f00198535f97a7aa",
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
