import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCPPy1vwFNX4kEo9FyCHPUjV50hnRYJyMQ",
  authDomain: "summit-guardian-rtdb-dca45.firebaseapp.com",
  databaseURL: "https://summit-guardian-rtdb-dca45-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "summit-guardian-rtdb-dca45",
  storageBucket: "summit-guardian-rtdb-dca45.appspot.com",
  messagingSenderId: "978983626224",
  appId: "1:978983626224:web:1f5817496f249f3bdc6935"
};

const app = initializeApp(firebaseConfig);

export default app;