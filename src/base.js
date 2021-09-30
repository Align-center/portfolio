import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const config = {
    apiKey: "AIzaSyB7GLV4ne-S-dIF3-bcG83upxu6LLcOMHA",
    authDomain: "portfolio-39509.firebaseapp.com",
    databaseURL: "https://portfolio-39509-default-rtdb.europe-west1.firebasedatabase.app"
};

firebase.initializeApp(config);

var database = firebase.database();

export default database;