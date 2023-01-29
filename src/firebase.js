import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { useCollection } from 'vuefire';
import { collection } from 'firebase/firestore';

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyDWzQznYhyEQZMP0zdeK3ZtYHBYvJPDUfU",
    authDomain: "tienda-vue-6f47b.firebaseapp.com",
    projectId: "tienda-vue-6f47b",
    storageBucket: "tienda-vue-6f47b.appspot.com",
    messagingSenderId: "159589590060",
    appId: "1:159589590060:web:8835349d8cb0ffa2e11d89",
    measurementId: "G-20DNGF7F7Q"
});

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp)
export const productos = useCollection(collection(db, 'productos'));
