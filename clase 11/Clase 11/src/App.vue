<script setup>
import navbar from './components/navbar.vue'
import taskCompleted from './components/taskCompleted.vue'
import calculator from './components/calculator.vue'
</script>

<template>
  <navbar />
  <div class="exercise">
    <h1>Ejercicio 1 , 2 </h1>
    <calculator />
    <taskCompleted />
  </div>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.exercise{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  margin: 40px auto;
  gap: 10em;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
