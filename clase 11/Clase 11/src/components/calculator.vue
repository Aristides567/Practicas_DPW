<script setup>
import { ref, computed } from 'vue'

const precioOriginal = ref(0)
const porcentajeDescuento = ref(0)

const precioFinal = computed(() => {
  const descuento = (precioOriginal.value * porcentajeDescuento.value) / 100
  return (precioOriginal.value - descuento).toFixed(2)
})
</script>

<template>
    <div class="card">
      <h2>Calculadora de Descuento</h2>
      <label>Precio Original: <input type="number" v-model="precioOriginal" /></label>
      <br />
      <label>Descuento (%): <input type="number" v-model="porcentajeDescuento" /></label>
      <p>Precio final: ${{ precioFinal }}</p>
    </div>
</template>

<style scoped>
.card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 1.5rem;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

input {
  margin-top: 4px;
  margin-bottom: 10px;
  padding: 6px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.resultado {
  font-weight: bold;
  color: #2d8f60;
  margin-top: 10px;
}
</style>

  