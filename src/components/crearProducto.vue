<script setup>
import { ref } from 'vue'
import { db } from '../firebase.js'
import { setDoc, doc } from "firebase/firestore";

var producto = ref(""), categoria = ref("") ,precio = ref(""), descripcion = ref(""), imagen = ref("");

function crearProducto () {
    const nombreProducto = producto.value;
    setDoc(doc(db, "productos"), {
        nombre: nombreProducto,
        categoria: categoria.value,
        precio: precio.value,
        descripcion: descripcion.value,
        imagen: imagen.value
    }
    ).then(() => {
        alert("Producto creado");
        window.location.href = "/";
    }).catch((error) => {
        alert("Error al crear el producto");
    });
    
}
</script>

<template>
    <section class="contenedor_creacion">
        <br />
        <input type="text" placeholder="Nombre del producto">
        <input type="text" placeholder="Categoria">
        <input type="text" placeholder="Precio">
        <input type="text" placeholder="Descripcion">
        <input type="text" placeholder="Imagen">
        <button @click="crearProducto">Crear Producto</button>
    </section>
</template>