// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBvogAwZpvC3eBSKhqOw-LauJHZk5AUuAE',
  authDomain: 'hallpass-seed-db.firebaseapp.com',
  projectId: 'hallpass-seed-db',
  storageBucket: 'hallpass-seed-db.appspot.com',
  messagingSenderId: '698406509014',
  appId: '1:698406509014:web:d8fccc62f75aa3dc3d2c77',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, (user) => {
  // Check for user status
});

export { auth, db };
