// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNj7lTfVGmih8YcsqVqQqbODIkl7TxJSs",
    authDomain: "stack-m360ict.firebaseapp.com",
    projectId: "stack-m360ict",
    storageBucket: "stack-m360ict.appspot.com",
    messagingSenderId: "372474477979",
    appId: "1:372474477979:web:90842faaabd58e3aebb53e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;
