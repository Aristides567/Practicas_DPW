<script setup>
            import { ref } from 'vue'

            const fechaNacimiento = ref('')
            const edad = ref(null)

            const calcularEdad = () => {
                const fechaNac = new Date(fechaNacimiento.value)
                const hoy = new Date()
                
                let edadCalculada = hoy.getFullYear() - fechaNac.getFullYear()
        
                const mes = hoy.getMonth() - fechaNac.getMonth()
                if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
                    edadCalculada--
                }
                
                edad.value = edadCalculada
            }
</script>
<template>
    <div>
        <form action="">
            <div class="calculator">
                <h1>Ejercicio 2</h1>
                <h2>Calculadora de Edad</h2>
                <input 
                    type="date" 
                    v-model="fechaNacimiento"
                    @change="calcularEdad"
                >
                <div v-if="edad !== null" class="resultado">
                    <p>Tu edad es: {{ edad }} años</p>
                    <p v-if="edad >= 18" class="mayor">Eres mayor de edad</p>
                    <p v-else class="menor">Eres menor de edad</p>
                </div>
            </div>
        </form>
    </div>
</template>
