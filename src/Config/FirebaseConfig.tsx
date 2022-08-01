// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbWq9j0jO-ERWo5JVTdAaIv8wny8YPBkc",
  authDomain: "cms-ticket-sale-appli.firebaseapp.com",
  projectId: "cms-ticket-sale-appli",
  storageBucket: "cms-ticket-sale-appli.appspot.com",
  messagingSenderId: "263321464718",
  appId: "1:263321464718:web:c5a6ca96105dae951d7edf",
  measurementId: "G-FX1F4Z26PM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
