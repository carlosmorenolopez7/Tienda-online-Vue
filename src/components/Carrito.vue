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
<section class="contenedor_carrito">
      <div class="titulo_carrito">
            <h1>Su Carrito</h1>
      </div>
      <div class="carrito_main">
            <section class="productos_carrito">
                  <productocarrito v-for="producto of carrito" :producto="producto" :carrito="carrito"></productocarrito>
            </section>
            <section class="informacion_carrito">
                  <div class="precio_carrito">
                        <div class="suma_carrito">
                              <section class="subtotal_carrito_contenedor">
                                    <span class="subtotal">Subtotal</span>
                                    <span class="precio" value="${ carrito.subtotal }">€</span>
                              </section>
                              <section class="gastos_carrito_contenedor">
                                    <span class="gastos">Gastos</span>
                                    <span class="precio">10.99€</span>
                              </section>
                        </div>
                        <div class="total_carrito_contenedor">
                              <span class="total">Total</span>
                              <span class="precio" value="${ carrito.total }">€</span>
                        </div>
                  </div>
                  <div class="opciones_carrito">
                        <button class="finalizar_compra">Finalizar Pedido</button>
                        <button class="borrar_carrito" @click="borrarCarrito">Borrar carrito</button>
                  </div>
            </section>
      </div>
</section>
</template>