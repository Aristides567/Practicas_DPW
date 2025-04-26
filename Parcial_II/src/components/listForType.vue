<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'

const pokemon = ref(null) 
const error = ref('') 
const pokemonesPorTipo = ref([]) 
const tipoSeleccionado = ref('fire')

const tipos = computed(() => {
    return pokemon.value?.types?.map(t => t.type.name) || []
})

//Ejercicio 4
const nameUpperCase = computed(() => {
    return pokemonesPorTipo.value.map(p => ({
        nombre: p.nombre.toUpperCase(),
        imagen: p.imagen
    }))
})

const buscarPorTipo = async () => {
    error.value = ""
    pokemonesPorTipo.value = []

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/type/${tipoSeleccionado.value}`)
        const lista = res.data.pokemon.slice(0,5)

        const promesas = lista.map(p => axios.get(p.pokemon.url))
        const resultados = await Promise.all(promesas)

        pokemonesPorTipo.value = resultados.map(r => ({
            nombre: r.data.name,
            imagen: r.data.sprites.front_default
        }))
    } catch (e) {
        error.value = "Error al buscar Pokémon por tipo"
    }
}
</script>

<template>
    <div class="p-4 max-w-md mx-auto space-y-4">
        <div>
            <select v-model="tipoSeleccionado" @change="buscarPorTipo" class="border p-2 rounded w-full bg-white">
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="electric">Electric</option>
            </select>
        </div>
        
        <!--Mostrar por tipos-->
        <div v-if="nameUpperCase.length" class="bg-white shadow-md rounded p-4 text-center mt-6">
            <h2 class="text-xl font-bold mb-4">Pokémon tipo {{ tipoSeleccionado }}</h2>
            <div v-for="poke in nameUpperCase" :key="poke.nombre" class="mb-4">
                <img :src="poke.imagen" alt="Imagen Pokémon" class="mx-auto h-24 mb-2">
                <p class="">{{ poke.nombre }}</p> 
            </div>
        </div>

        <p v-if="error" class="text-red-500 font-bold">{{ error }}</p>
    </div>
</template>
