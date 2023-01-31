<script setup>
import { RouterLink, RouterView } from 'vue-router';
localStorage.carrito = JSON.stringify([]);
</script>

<template>
<header>
  <div class="contenedor_logo">
    <router-link to="/">
      <i class="fa-brands fa-shopify"></i>
    </router-link>
  </div>
  <nav id='enlace_secciones'>
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
  <div class='opciones_usuario'>
    <router-link to="/inicio_sesion"><i class='fas fa-user' id='inicio_sesion'></i></router-link>
    <router-link to="/carrito"><i class='fa-solid fa-cart-shopping' id='carrito'></i></router-link>
  </div>
</header>
<main>
  <RouterView/>
</main>
</template>