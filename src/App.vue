<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useFirestore, useCollection } from 'vuefire';
import { collection, setDoc, addDoc, deleteDoc, getDocs, doc } from 'firebase/firestore';
import { ref } from 'vue';
localStorage.carrito = JSON.stringify([]);
</script>

<template>
<header>
  <div class="contenedor-logo">
    <router-link to="/">
      <i class="fa-brands fa-shopify"></i>
    </router-link>
  </div>
  <nav id='enlace-secciones'>
    <li class='hover vistas'>
      <router-link to="/hombre" value="hombre">Hombre</router-link>
    </li>
    <li class='hover vistas'>
      <router-link to="/mujer" value="mujer">Mujer</router-link>
    </li>
    <li class='hover vistas'>
      <router-link to="/joyas" value="joyas">Joyas</router-link>
    </li>
    <li class='hover vistas'>
      <router-link to="/electronica" value="electronica">Electronica</router-link>
    </li>
  </nav>
  <div class='opciones-usuario'>
    <router-link to="/inicio-sesion"><i class='fas fa-user' id='inicio-sesion'></i></router-link>
    <router-link to="/carrito"><i class='fa-solid fa-cart-shopping' id='carrito'></i></router-link>
  </div>
</header>
<main>
  <RouterView/>
</main>
</template>