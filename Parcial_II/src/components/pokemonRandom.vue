<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'

const pokemon = ref(null) 
const error = ref('') 

const tipos = computed(() => {
    return pokemon.value?.types?.map(t => t.type.name) || []
})
//Ejercicio 3
const habilidades = computed(() => {
    return pokemon.value?.abilities?.map(a => a.ability.name) || []
})


const buscarPokemonAleatorio = async () => {
    error.value = ""
    const numeroAleatorio = Math.floor(Math.random() * 151) + 1

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`)
        pokemon.value = res.data
    } catch (e) {
        error.value = "Error al buscar Pokémon aleatorio"
    }
}

</script>

<template>
    <div class="p-4 max-w-md mx-auto space-y-4">
        <button @click="buscarPokemonAleatorio" class="bg-white text-black px-4 py-2 rounded hover:bg-cyan-900 hover:text-white w-full">
            Buscar Pokémon Aleatorio
        </button>

        <!--Mostrar Card de pokemon-->
        <div v-if="pokemon" class="bg-white shadow-md rounded p-4 text-center">
            <img :src="pokemon.sprites.front_default" alt="Imagen Pokémon" class="mx-auto mb-4 h-32">
            <h2 class="text-xl font-bold">{{ pokemon.name }}</h2>
            <p>Altura: {{ pokemon.height }}</p>
            <p>Peso: {{ pokemon.weight }}</p>
            <p>
                Tipos:
                <span v-for="tipo in tipos" :key="tipo" class="inline-block bg-gray-300 text-gray-700 rounded px-2 py-1 m-1">
                    {{ tipo }}
                </span>
            </p>
            <p class="mt-2">
                Habilidades:
                <span v-for="habilidad in habilidades" :key="habilidad" class="inline-block bg-purple-300 text-purple-800 rounded px-2 py-1 m-1">
                    {{ habilidad }}
                </span>
            </p>
        </div>
        <!--Manejo de errores en el template-->
        <p v-if="error" class="text-red-500 font-bold">{{ error }}</p>
    </div>
</template>
