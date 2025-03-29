<script setup>
import {ref} from 'vue'

const tareas = ref([
  { id: 1, titulo: 'Estudiar Vue.js', completada: false },
  { id: 2, titulo: 'Hacer ejercicios', completada: false },
  { id: 3, titulo: 'Repasar conceptos', completada: false },
  { id: 4, titulo: 'Practicar código', completada: false }
])
</script>

<template>
  <div class="lista-tareas">
    <h1>Ejercicio 1</h1>
    <h2>Lista de Tareas</h2>
    <ul>
      <li v-for="tarea in tareas">
        <input 
          type="checkbox" 
          v-model="tarea.completada"
        >
        {{ tarea.titulo }}
        <span v-if="tarea.completada" style="color: green;">
          Tarea completada
        </span>
        <span v-else style="color: red;">
          Tarea pendiente
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.lista-tareas {
  max-width: 600px;
  padding-top: 300px;  
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
}

input[type="checkbox"] {
  margin-right: 10px;
}
</style>
