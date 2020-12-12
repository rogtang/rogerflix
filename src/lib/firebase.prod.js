import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import {seedDatabase} from '../seed';

const config = {
  apiKey: "AIzaSyA_ks9B1BHzsQwCt4Jnoz9y__31cyBBWQg",
  authDomain: "netflix-clone-2a810.firebaseapp.com",
  databaseURL: "https://netflix-clone-2a810.firebaseio.com",
  projectId: "netflix-clone-2a810",
  storageBucket: "netflix-clone-2a810.appspot.com",
  messagingSenderId: "275092762136",
  appId: "1:275092762136:web:b920ba8a4cb6a68b5a9d6d",
};

const firebase = Firebase.initializeApp(config);

//comment out or delete seedDatabase as soon as it is imported once in index.js, otherwise will seed duplicate data
//seedDatabase(firebase);

export { firebase };
