import firebase from 'firebase';

//=========================================================
//  FIREBASE
//---------------------------------------------------------

export const firebaseConfig = {
  // apiKey: "AIzaSyA6JoBlb3X5_6JmzO6aOLtY2HrSBJUg67o",
  // authDomain: "scale360-react-starter-kit.firebaseapp.com",
  // databaseURL: "https://scale360-react-starter-kit.firebaseio.com",
  // projectId: "scale360-react-starter-kit",
  // storageBucket: "scale360-react-starter-kit.appspot.com",
  // messagingSenderId: "..."
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();
