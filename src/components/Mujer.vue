<script setup >
import { productos } from '../firebase.js';
import productocomponente from './Producto.vue'

function filtrarProductos(productos){
      return productos.filter((producto) => 
            producto.categoria == "women's clothing"
      )
}
</script>

<template>
<div class="contenedor_categorias">
      <section class='categoria'>
            <section class='cabecera'>
                  <h1 class="titulo_seccion">Mujer</h1>
                  <div class="ordenar">
                        <span>Ordenar: </span>
                        <select class="order">
                        <option value="asc">Hacia arriba</option>
                        <option value="desc">Hacia abajo</option>
                        </select>
                  </div>
            </section>
            <section class='productos'>
                  <productocomponente v-for="producto in filtrarProductos(productos)" :producto="producto"></productocomponente>
            </section>
      </section>
</div>
</template>
