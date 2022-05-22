const firebaseConfig = {
  apiKey: "AIzaSyDhFhGyNTNAuCtbaug4E6GaUtM7AmBBvzA",
  authDomain: "attendance-thing-28065.firebaseapp.com",
  databaseURL: "https://attendance-thing-28065-default-rtdb.firebaseio.com",
  projectId: "attendance-thing-28065",
  storageBucket: "attendance-thing-28065.appspot.com",
  messagingSenderId: "477003572802",
  appId: "1:477003572802:web:e51c82bc9b9cb40408afdb",
};

// Initialize Firebase
const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);