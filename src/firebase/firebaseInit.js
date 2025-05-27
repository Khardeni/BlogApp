import firebase from "firebase/app";
import "firebase/firestore";    


const firebaseConfig = {
  apiKey: "AIzaSyDHnDhgtcsKSHmuTIHIeHKDzcBRPQGWuzc",
  authDomain: "fireblogs-ca587.firebaseapp.com",
  projectId: "fireblogs-ca587",
  storageBucket: "fireblogs-ca587.firebasestorage.app",
  messagingSenderId: "166311535067",
  appId: "1:166311535067:web:ff9fe7ba31ebe599ce47fe",
  measurementId: "G-C1F3TPBMRB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
// export default firebaseApp.firestore();