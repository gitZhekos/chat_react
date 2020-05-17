import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyA50KYAzwYXz_Wt8InNc2E_CDyqYgvbDxc",
  authDomain: "chat-react-app-d65ec.firebaseapp.com",
  databaseURL: "https://chat-react-app-d65ec.firebaseio.com",
  projectId: "chat-react-app-d65ec",
  storageBucket: "chat-react-app-d65ec.appspot.com",
  messagingSenderId: "237513838734",
  appId: "1:237513838734:web:3882d07737a5e16d8639df"
};
firebase.initializeApp(config);

export default firebase.firestore();