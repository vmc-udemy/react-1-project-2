import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut,
  signInWithPopup,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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

const googleProvider = new GoogleAuthProvider();

// provider.setCustomParameters({
//   prompt: 'select_account'
// });

export const signout = signOut;
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {},
) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
