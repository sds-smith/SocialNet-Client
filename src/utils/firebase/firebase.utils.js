import { 
    initializeApp,
 } from "firebase/app";

 import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    NextOrObserver
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: 'select_account'
})

const AUTH_PROVIDER_OPTIONS = {
  google: googleProvider
}

export const auth = getAuth()
export const signInWithAuthPopup = (provider) => signInWithPopup(auth, AUTH_PROVIDER_OPTIONS[provider])

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return
    return await createUserWithEmailAndPassword(auth, email, password)
  }

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return
    return await signInWithEmailAndPassword(auth, email, password)
  }

  export const signOutUser = async () => await signOut(auth)

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth) => {
                unsubscribe()
                resolve(userAuth)
            },
            reject
        )
    })
  }