import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut,
  signInWithPopup,
  // signInWithRedirect,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDTAyAEHDCpHQ58c_uB4Vju8E6alCUSFoY',
  authDomain: 'udemy-react-1-project-1.firebaseapp.com',
  projectId: 'udemy-react-1-project-1',
  storageBucket: 'udemy-react-1-project-1.appspot.com',
  messagingSenderId: '457630679324',
  appId: '1:457630679324:web:e1f52c28e3f5c6bc9abad9',
};

initializeApp(firebaseConfig);
// const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

// provider.setCustomParameters({
//   prompt: 'select_account'
// });

export const signout = signOut;
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
