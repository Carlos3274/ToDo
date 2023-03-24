import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCNSYXJvaDOc1zmveAMJgo-urZlHHTKY0g',
  authDomain: 'todo-69167.firebaseapp.com',
  projectId: 'todo-69167',
  storageBucket: 'todo-69167.appspot.com',
  messagingSenderId: '607863740429',
  appId: '1:607863740429:web:7082d6352b212a5d8fdd44',
  measurementId: 'G-TPSRKYB2G4',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
