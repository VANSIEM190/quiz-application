// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAk5sms5W_6wYfbXoTnxYpL4EL3uGT8mIM',
  authDomain: 'smart-quiz-c2088.firebaseapp.com',
  projectId: 'smart-quiz-c2088',
  storageBucket: 'smart-quiz-c2088.firebasestorage.app',
  messagingSenderId: '202295546545',
  appId: '1:202295546545:web:e532d8fb13243bd34dc890',
  measurementId: 'G-LXNTGWBFV7',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
