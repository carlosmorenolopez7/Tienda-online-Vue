<script setup >
import { productos } from '../firebase.js';
import productocomponente from './Producto.vue'

function filtrarProductos(productos){
      return productos.filter((producto) => 
            producto.categoria == "jewelry"
      )
}
</script>

<template>
<div class="contenedor-categorias">
      <section class='vistas categoria'>
            <section class='cabecera'>
                  <h1 class="titulo-seccion">Joyas</h1>
                  <span class="ordenar ascendente">Ascendente</span>
                  <span class="ordenar descendente">Descendente</span>
            </section>
            <section class='productos'>
                  <productocomponente v-for="producto in filtrarProductos(productos)" :producto="producto"></productocomponente>
            </section>
      </section>
</div>
</template>
