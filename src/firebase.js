import { initializeApp } from 'firebase/app'
import { getFirestore} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCAXMDLzE7VaqEyYK9ji6xG0dkk96XT9hs",
    authDomain: "disney-plus-movies-56733.firebaseapp.com", 
    projectId: "disney-plus-movies-56733",
    storageBucket: "disney-plus-movies-56733.appspot.com",
    messagingSenderId: "886155571015",
    appId: "1:886155571015:web:14553513ec2ca1cb6be662"
};

// init firebase app
const app = initializeApp(firebaseConfig);

// init firebase service
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export {auth, provider, storage};
export default db;


