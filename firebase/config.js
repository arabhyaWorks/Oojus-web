import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDdFHTYdfSIrGhqYdRJuGctmpvsCRIFusI",
  authDomain: "oojus-ad231.firebaseapp.com",
  databaseURL: "https://oojus-ad231-default-rtdb.firebaseio.com",
  projectId: "oojus-ad231",
  storageBucket: "oojus-ad231.appspot.com",
  messagingSenderId: "293915616535",
  appId: "1:293915616535:web:cf365f8e26d5e49e380352",
  measurementId: "G-89YZCTL3VX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
