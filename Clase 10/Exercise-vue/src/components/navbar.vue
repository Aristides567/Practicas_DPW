<script setup>
    import { ref } from 'vue'

    const url = ref("https://www.google.com");

    const array = ref(['Pedro Sanchez', 'Juan Magan', 'Keroro']);

    const cont = ref(-1);

    const count = ref(0)
    const i = () => {
        count.value ++
    }

    defineProps({
        name: String,
        lastname: String,
    });

</script>

<template>
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; gap: 3em;">
        <a v-bind:href="url">Link a Goggle</a>
        <h1>{{ name }} <span style="color: blue;">{{ lastname }}</span></h1>
        <div>
            <h2>Contador: {{ count }}</h2>
            <button @click="i()">Click me</button>

            <h2 v-if="cont > 0">Si es mayor que 0</h2>
            <h2 v-else="cont < 0">No es mayor que 0</h2>
        </div>
        <ul>
            <li v-for="array in arrays">{{ array }}</li>
        </ul>
    </div>
</template>