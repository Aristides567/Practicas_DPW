<script setup>
import { ref, computed } from 'vue'

const tareas = ref([
  { texto: 'Hacer ejercicio', completada: true },
  { texto: 'Estudiar Vue', completada: false },
  { texto: 'Leer un libro', completada: true },
  { texto: 'Sacar la basura', completada: false }
])

const tareasCompletadas = computed(() => {
  return tareas.value.filter(t => t.completada)
})
</script>

<template>
    <div class="card">
      <h2>Lista de Tareas</h2>
      <ul>
        <li v-for="(tarea, index) in tareas" :key="index">
          {{ tarea.texto }} - <strong>{{ tarea.completada ? '✔️' : '❌' }}</strong>
        </li>
      </ul>
  
      <h3>Tareas Completadas:</h3>
      <ul>
        <li v-for="(tarea, index) in tareasCompletadas" :key="'comp' + index">
          {{ tarea.texto }}
        </li>
      </ul>
    </div>
</template>

<style scoped>
.card {
  background-color: #f1f7ff;
  border: 1px solid #aac4e9;
  padding: 1.5rem;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin: 6px 0;
  padding: 4px 8px;
  border-radius: 5px;
}

.completada {
  color: green;
  font-weight: bold;
}
</style>
  

  