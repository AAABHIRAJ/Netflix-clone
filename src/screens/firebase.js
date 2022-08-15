import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDOiqWYmGkLu2Mh1fHtl5q_K1NI1cHKli8",
    authDomain: "netflix-clone-e1569.firebaseapp.com",
    projectId: "netflix-clone-e1569",
    storageBucket: "netflix-clone-e1569.appspot.com",
    messagingSenderId: "260564298213",
    appId: "1:260564298213:web:11aa748de5e2362c02a70c"
};
  
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(firebaseApp);

export { auth };
export default db;
