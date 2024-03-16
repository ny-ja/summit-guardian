import { getDatabase, ref, get, onValue } from "firebase/database";
import app from "./config";

const db = getDatabase(app);

export const getDataFromDatabase = async (path) => {
  const dataRef = ref(db, path);
  const snapshot = await get(dataRef);

  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    return null;
  }
};

export const onDatabaseDataChange = (path, callback) => {
  const dataRef = ref(db, path);
  onValue(dataRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
};


























