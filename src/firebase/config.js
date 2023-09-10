import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDUP9AJnV8X_O6OmwQYJA9AhpFvbZeA9ck",
  authDomain: "summit-guardian-db.firebaseapp.com",
  databaseURL: "https://summit-guardian-db-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "summit-guardian-db",
  storageBucket: "summit-guardian-db.appspot.com",
  messagingSenderId: "34321154609",
  appId: "1:34321154609:web:a0acbeeb6fb9a5a0d54b10"
};

const app = initializeApp(firebaseConfig);

export default app;