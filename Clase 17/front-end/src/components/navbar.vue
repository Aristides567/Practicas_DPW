<script setup>
import { ref, onMounted } from 'vue';

const productos = ref([])

onMounted(async () => {
    try {
        const res = await fetch("http://localhost:3000/productos")
        const data = await res.json()
        productos.value = data
        
    } catch (error) {
        console.error("Error al cargar los productos", error)
    }
})

</script>

<template>

<div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Nuestros productos</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div v-for="producto in productos" :key ="producto._id" class="bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform">
            <h3 class="text-lg font-semibold text-gray-800">
                {{ producto.nombre }}
            </h3>

            <img :src="`http://localhost:3000/uploads/${producto.imagen}`" alt="" class="w-full h-40 object-cover rounded-2xl mb-2">

            <p class="text-gray-600">{{ producto.descripcion }}</p>
            <p class="text-gray-600 font-semibold mt-2"> precio: ${{ producto.precio }}</p>
            <p class="text-sm text-gray-500"> Stock{{ producto.stock }}</p>
        </div>
    </div>
</div>

  
</template>