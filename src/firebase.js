import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDckP_RtoB9qhcENAAdmdILSVRe34btOH8",
  authDomain: "crmz-e12b4.firebaseapp.com",
  projectId: "crmz-e12b4",
  storageBucket: "crmz-e12b4.appspot.com",
  messagingSenderId: "1060737088640",
  appId: "1:1060737088640:web:4459dca5be70d33480fa65",
  measurementId: "G-RD6Z35KTVB"
};
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
  
export {auth}