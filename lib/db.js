import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import firebase from 'firebase/analytics'

export function loadDatabase() {
    try{  const firebaseConfig = {
        apiKey: "AIzaSyB6A4zBcoD3uSP4IAfVP2jbMlHNWVawnLI",
        authDomain: "arittgray.firebaseapp.com",
        databaseURL: "https://arittgray.firebaseio.com",
        projectId: "arittgray",
        storageBucket: "arittgray.appspot.com",
        messagingSenderId: "1087478548200",
        appId: "1:1087478548200:web:3e9a13774225401820ab5d",
        measurementId: "G-9TRF9BVWE1"
      };

  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  
} catch(err){
    console.log(err.message);
}
return firebase;
}
  