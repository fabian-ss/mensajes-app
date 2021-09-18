// import firebase from "firebase/compat/app";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/storage";
// import "firebase/compat/storage"; dbpostgres-1.cxtlsz5guknw.us-east-2.rds.amazonaws.com
// import "firebase/compat/storage"; randompostgres 


const firebaseConfig = {
    apiKey: "AIzaSyD1UBDNzR-mr_K0dVrponWxdMcltawKip0",
    authDomain: "signal-clone-5c4b5.firebaseapp.com",
    projectId: "signal-clone-5c4b5",
    storageBucket: "signal-clone-5c4b5.appspot.com",
    messagingSenderId: "559839084053",
    appId: "1:559839084053:web:20c3254bb9122dedb2581c"
  };

let app

  if(firebase.apps.length == 0){
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }

const db = app.firestore();
const auth = app.auth();

export { db, auth };

//   const app = !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app();

// const db = app.firestore();
// const auth = app.auth();

// const provider = new firebase.auth.GoogleAuthProvider();

// export { db, auth, provider };