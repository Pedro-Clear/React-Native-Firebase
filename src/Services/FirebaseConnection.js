import firebase from "firebase/app";
import "firebase/database"


const firebaseConfig = {
    apiKey: "AIzaSyDi8XANSDT9uoAT1OEtsANEALy0Xnzm0AY",
    authDomain: "novo-app-73660.firebaseapp.com",
    projectId: "novo-app-73660",
    storageBucket: "novo-app-73660.appspot.com",
    messagingSenderId: "806756658053",
    appId: "1:806756658053:web:36a29793146e83a35032ec"
  };
  
if (!firebase.app.length){
    firebase.initializeApp(firebaseConfig)
}

  export default firebase;
