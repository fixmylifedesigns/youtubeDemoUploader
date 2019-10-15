import firebase from "firebase";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBEEJW6vyYxTYMY-6FCZF-STJB-DP3AvF4",
  authDomain: "demouploader-71303.firebaseapp.com",
  databaseURL: "https://demouploader-71303.firebaseio.com",
  projectId: "demouploader-71303",
  storageBucket: "demouploader-71303.appspot.com",
  messagingSenderId: "460092740979",
  appId: "1:460092740979:web:7550c2a15f2c515e65a106",
  measurementId: "G-6XNBLCTJW8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
