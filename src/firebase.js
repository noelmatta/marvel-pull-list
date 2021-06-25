import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBkOHIdsZyTVEVEDPif7HKop1ThtMPYyoc",
  authDomain: "marvel-pull-list.firebaseapp.com",
  projectId: "marvel-pull-list",
  storageBucket: "marvel-pull-list.appspot.com",
  messagingSenderId: "110940400322",
  appId: "1:110940400322:web:e3d9af9c1684b77af4695b",
  measurementId: "G-1XVPBV92TC"
};
firebase.initializeApp(firebaseConfig);


export default firebaseConfig;