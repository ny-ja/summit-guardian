import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAiJhUBmb3WuXkMFxbwvxTdvMnfSCc8zPM",
  authDomain: "summit-guardian-rtdb.firebaseapp.com",
  databaseURL: "https://summit-guardian-rtdb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "summit-guardian-rtdb",
  storageBucket: "summit-guardian-rtdb.appspot.com",
  messagingSenderId: "584551985261",
  appId: "1:584551985261:web:de27edadb5e58c8e834f64"
};

const app = initializeApp(firebaseConfig);

export default app;