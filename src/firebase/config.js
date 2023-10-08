import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyA1Fgi6B2kn_Y5rgVneI3zyoOHRX2lpPn0",
  authDomain: "summit-guardian-a7b15.firebaseapp.com",
  databaseURL: "https://summit-guardian-a7b15-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "summit-guardian-a7b15",
  storageBucket: "summit-guardian-a7b15.appspot.com",
  messagingSenderId: "372551558944",
  appId: "1:372551558944:web:cef9b0b56301149e59d945"
};

const app = initializeApp(firebaseConfig);

export default app;