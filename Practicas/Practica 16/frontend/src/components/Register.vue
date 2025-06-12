<template>
  <div class="register-container">
    <form @submit.prevent="register" class="register-form">
      <h2>Registrar Usuario</h2>
      <input v-model="email" type="email" placeholder="Correo electrónico" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Registrar</button>
      <p v-if="error" class="error">{{ error }}</p>
      <p v-if="success" class="success">{{ success }}</p>
        <p class="redirect-text">
          ¿Ya posees una cuenta? 
          <router-link to="/Login">Iniciar Sesion</router-link>
        </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const email = ref('')
const password = ref('')
const error = ref('')
const success = ref('')

const register = async () => {
  error.value = ''
  success.value = ''
  try {
    const res = await axios.post('http://localhost:4000/api/auth/register', {
      email: email.value,
      password: password.value
    })
    success.value = res.data.message
    email.value = ''
    password.value = ''
  } catch (err) {
    error.value = err.response?.data?.message || 'Error desconocido'
  }
}
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f9fafb;
}

.register-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 320px;
  display: flex;
  flex-direction: column;
}

.register-form h2 {
  margin-bottom: 1rem;
  text-align: center;
}

.register-form input {
  margin-bottom: 1rem;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.register-form button {
  background: #10b981;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.register-form button:hover {
  background: #059669;
}

.error {
  color: #dc2626;
  margin-top: 0.5rem;
  text-align: center;
}

.success {
  color: #16a34a;
  margin-top: 0.5rem;
  text-align: center;
}

.redirect-text {
  margin-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
}

.redirect-text a {
  color: #4f46e5;
  text-decoration: underline;
  cursor: pointer;
}

.redirect-text a:hover {
  color: #4338ca;
}
</style>
