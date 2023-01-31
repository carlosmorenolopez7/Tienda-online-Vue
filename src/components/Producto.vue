<script setup>
import router from '../router';
defineProps(['producto'])

function verProducto(id){
      router.push(`/producto/${id}`)
}
</script>

<template>
<section class='producto'>
      <div class="contenedor_imagen_producto">
            <img class="imagen_producto" @click="verProducto(producto.id)" :src="producto.imagen" :alt="producto.nombre">
      </div>
      <div class="contenedor_contenido_producto">
            <p class="nombre_producto">{{producto.nombre}}</p>
            <p class="precio_producto">{{producto.precio}}</p>
            <input type='hidden' class='id_producto' :value="producto.id">
            <button class="ver" @click="verProducto(producto.id)">Ver</button>
       </div>
</section>
</template>