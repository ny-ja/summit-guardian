import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAzfVy326lVhrbdF_qtaG7LpBxJ8ID0RSk",
  authDomain: "summit-guardian-db-7ae6c.firebaseapp.com",
  databaseURL:
    "https://summit-guardian-db-7ae6c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "summit-guardian-db-7ae6c",
  storageBucket: "summit-guardian-db-7ae6c.appspot.com",
  messagingSenderId: "176656080993",
  appId: "1:176656080993:web:d4737d4d74e4471a7d4a20",
};

const app = initializeApp(firebaseConfig);

export default app;
