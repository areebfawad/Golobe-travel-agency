// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore , collection , addDoc , getDocs, writeBatch , doc } from "firebase/firestore";
import flightDetails from '../utils/Flights'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHp_mJ3oNLRcGyzx-Eh5BVDS7wnTB3Ml8",
  authDomain: "golobe-travel-agency-425cc.firebaseapp.com",
  projectId: "golobe-travel-agency-425cc",
  storageBucket: "golobe-travel-agency-425cc.appspot.com",
  messagingSenderId: "392060139461",
  appId: "1:392060139461:web:f8206a5a75174dd9e8fdac",
  measurementId: "G-EVKF5QJTXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app)

// console.log("flight details" , flightDetails);







export {
    app,
    db,
    getDocs,
    // flightTicketsCollection,
    // collection,
    flightDetails,
    doc,
    auth

}








