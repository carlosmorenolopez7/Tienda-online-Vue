<script setup>
import router from '../router';
defineProps(['producto'])

function verProducto(id){
      router.push(`/producto/${id}`)
}
</script>

<template>
<section class='producto'>
      <div class="contenedor-imagen-producto">
            <img class="imagen-producto" @click="verProducto(producto.id)" :src="producto.imagen" :alt="producto.nombre">
      </div>
      <div class="contenedor-contenido-producto">
            <p class="nombre-producto">{{producto.nombre}}</p>
            <p class="precio-producto">{{producto.precio}}</p>
            <input type='hidden' class='id-producto' :value="producto.id">
            <button class="ver" @click="verProducto(producto.id)">Ver</button>
       </div>
</section>
</template>