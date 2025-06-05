<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';


/*const nombrePokemon = ref('')
const pokemon = ref(null)
const error = ref('')

const tipos = computed(()=>{
  return pokemon.value?.types?.map(t => t.type.name) || []
})


const buscarPokemon = async () => {
  error.value = ''
  pokemon.value = null

  if (!nombrePokemon.value.trim()) {
    error.value = 'Por favor escribe un nombre válido'
    return
  }

  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon.value.toUpperCase()}`)
    pokemon.value = res.data

  } catch (e) {
    error.value = e.response?.status === 404
    ? 'Pokemon no encontrado'
    : 'Erros al buscar el pokemon'
  }
}*/

</script>

<template>


<!--div class="p-4 max-w-md mx-auto">
  <input type="text" v-model="nombrePokemon" placeholder="ingresa el nombre del pokemon" class="border p-2 rounded w-full">
  <button @click="buscarPokemon"  class="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    Buscar
  </button>


  <div v-if="pokemon" class="mt-6 bg-white shadow-md rounded p-4 text-center">
    <img :src="pokemon.sprites.front_default" alt="imagen" class="mx-auto mb-4 w-1/2"/>
    <h2 class="text-xl font-bold capitalize">{{ pokemon.name }}</h2>
    <p>Altura: {{ pokemon.height / 10 }} m</p>
    <p>Peso: {{ pokemon.weight / 10 }} kg</p>

    <p class="mt-2">
        Tipo: 
        <span 
          v-for="tipo in tipos" 
          :key="tipo" 
          class="inline-block bg-gray-200 rounded px-2 mx-1">
          {{ tipo }}
        </span>
      </p>     
  </div>
  <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
</div!-->

  
</template>