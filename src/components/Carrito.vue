<script setup>
import { ref } from 'vue';
import productocarrito from './ProductoCarrito.vue'
var carrito = ref(false);

if (localStorage.carrito) {
      carrito.value = JSON.parse(localStorage.carrito);
}

function borrarCarrito(){
      localStorage.carrito = JSON.stringify([])
      carrito.value = JSON.parse(localStorage.carrito);
}
</script>

<template>
<section class="contenedor-carrito">
      <div class="carrito-titulo">
            <h1>Su Carrito</h1>
      </div>
      <div class="carrito-contenido">
            <section class="contenedor-productos-carrito">
                  <productocarrito v-for="producto of carrito" :producto="producto" :carrito="carrito"></productocarrito>
            </section>
            <section class="contenedor-informacion-carrito">
                  <div class="precio-carrito">
                        <div class="suma-carrito">
                              <section class="subtotal-carrito-contenedor">
                                    <span class="subtotal">Subtotal</span>
                                    <span class="euro" value="${carrito.subtotal}">€</span>
                              </section>
                              <section class="gastos-carrito-contenedor">
                                    <span class="gastos">Gastos</span>
                                    <span class="euro">10.99€</span>
                              </section>
                        </div>
                        <div class="total-carrito-contenedor">
                              <span class="total">Total</span>
                              <span class="euro" value="${ carrito.total }">€</span>
                        </div>
                  </div>
                  <div class="opciones-carrito">
                        <button class="finalizar-compra">Finalizar Pedido</button>
                        <button class="borrar-carrito" @click="borrarCarrito">Borrar carrito</button>
                  </div>
            </section>
      </div>
</section>
</template>