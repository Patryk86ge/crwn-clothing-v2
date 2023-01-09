import {initializeApp} from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBQLM4oaRFhm0dF0ik1TED983QHX2CW4VM",
  authDomain: "crwn-clothing-db-c46c1.firebaseapp.com",
  projectId: "crwn-clothing-db-c46c1",
  storageBucket: "crwn-clothing-db-c46c1.appspot.com",
  messagingSenderId: "916719646982",
  appId: "1:916719646982:web:17d51a098df2024f36c687"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
  ) => {
  if (!userAuth) return ;
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef)

  if (!userSnapShot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log('error creating the users', error.messages);

    }
  }
  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email,password) => {
  if (!email || !password) return ;
  return await createUserWithEmailAndPassword(auth,email,password);
}
export const signInAuthUserWithEmailAndPassword = async (email,password) => {
  if (!email || !password) return ;
  return await signInWithEmailAndPassword(auth,email,password);
}