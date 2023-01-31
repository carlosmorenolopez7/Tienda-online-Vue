<script setup>
defineProps(['producto','carrito'])

function eliminarProducto(producto,carrito){
      carrito.splice(carrito.indexOf(producto),1)
}
</script>

<template>
<div class="producto_carrito">
      <input type="hidden" class="id_producto_carrito" :value="producto.id">
      <div class="contenedor_imagen_producto_carrito">
            <img class="imagen_producto_carrito" :src="producto.imagen" :alt="producto.nombre">
      </div>
      <div class="contenedor_informacion_producto_carrito">
            <h1 class="nombre_producto_carrito">{{producto.nombre}}</h1>
            <div class="eliminar_producto" @click="eliminarProducto(producto,carrito)">
                  <img class="imagen_eliminar" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1024px-Red_X.svg.png" alt="">
            </div>
            <span class="menos">_</span>
            <span class="cantidad_productos">0</span>
            <span class="mas">+</span>
            <span class="precio_productos">{{producto.precio}} </span>
      </div>
</div>
</template>