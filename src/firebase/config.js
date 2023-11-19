import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBzQHnktl3MRsWiUdyGmzI6iBiPfi15COQ",
  authDomain: "summit-guardian-db-fa6c5.firebaseapp.com",
  databaseURL: "https://summit-guardian-db-fa6c5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "summit-guardian-db-fa6c5",
  storageBucket: "summit-guardian-db-fa6c5.appspot.com",
  messagingSenderId: "222627471801",
  appId: "1:222627471801:web:3ce5f480a7bccf212b1668"
};

const app = initializeApp(firebaseConfig);

export default app;