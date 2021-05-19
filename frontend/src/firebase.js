import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDR6gv5erBDAlx9zRi86_SrJw8oyEePblU",
    authDomain: "capba-739b5.firebaseapp.com",
    databaseURL: "https://capba-739b5-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "capba-739b5",
    storageBucket: "capba-739b5.appspot.com",
    messagingSenderId: "886497783245",
    appId: "1:886497783245:web:8825320aad419364186884",
    measurementId: "G-K1K8CVN7X9"
};

firebase.initializeApp(firebaseConfig);

export default firebase;