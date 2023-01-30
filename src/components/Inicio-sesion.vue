<script setup>
import { ref } from 'vue'
import { auth } from '../firebase.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

var usuario = ref(""), contraseña = ref("");

function altaUsuario(){
    createUserWithEmailAndPassword(auth, usuario.value, contraseña.value)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert ("Usuario creado");
        window.location.href = "/";
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
}

function iniciarSesion(){
    signInWithEmailAndPassword(auth, usuario.value, contraseña.value)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert ("Sesión iniciada, bienvenido");
        window.location.href = "/";
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}

function googleSesion(){
    signInWithPopup(auth, new GoogleAuthProvider())
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        alert ("Sesión iniciada con Google");
        window.location.href = "/";
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
}

function cerrarSesion(){
    auth.signOut().then(() => {
        // Sign-out successful.
        alert ("Sesión cerrada");
        window.location.href = "/";
    }).catch((error) => {
        // An error happened.
    });
}
</script>

<template>
    <section class="contenedor-login">
        <br />
        email: <input type="text" v-model="usuario"><br />
        contraseña: <input type="password" v-model="contraseña"><br />
        <button @click="altaUsuario">Darse de alta</button>
        <button @click="iniciarSesion">Iniciar Sesion</button>
        <button @click="googleSesion">Iniciar Sesion con Google</button>
        <button @click="cerrarSesion">Cerrar Sesion</button>
    </section>
</template>