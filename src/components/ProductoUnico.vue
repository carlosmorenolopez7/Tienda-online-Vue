<script setup>
import { useRoute } from 'vue-router';
import { productos } from '../firebase.js'
const router = useRoute();
var producto = productos.value.find((producto) => producto.id == router.params.id)

function enviarAlCArrito(){
      var carrito = JSON.parse(localStorage.carrito);
      carrito.push(producto);
      localStorage.carrito = JSON.stringify(carrito);
}
</script>


<template>
<div class="contenedor_producto">
      <section class="producto_unico">
            <h1 class="titulo_producto_unico">{{ producto.nombre }}</h1>
            <div class="contenendor_imagen_producto_unico">
                  <img class="imagen_producto_unico" :src="producto.imagen">
            </div>
            <p class="descripcion_producto_unico">{{producto.descripcion}}</p>
            <p class="precio_producto_unico">{{producto.precio}}</p>
            <div class="caracteristicas_producto_unico">
                  <div class="contenendor_cantidad_producto_unico">
                        <span>Cantidad: </span>
                        <select class="cantidad_producto_unico">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                        </select>
                  </div>
                  <div class="contenendor_talla_producto_unico">
                        <span>Talla: </span>
                        <select class="talla_producto_unico">
                              <option value="s">S</option>
                              <option value="m">M</option>
                              <option value="l">L</option>
                              <option value="xl">XL</option>
                        </select>
                  </div>
            </div>
      </section>
      <button class="comprar" @click="enviarAlCArrito">Enviar al carrito</button>
</div>
</template>