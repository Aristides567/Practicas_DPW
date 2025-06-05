<template>
  <div class="login-container">
    <form @submit.prevent="login" class="login-form">
      <h2>Iniciar Sesión</h2>
      <input v-model="email" type="email" placeholder="Correo electrónico" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Ingresar</button>
      <p v-if="error" class="error">{{ error }}</p>
      <p class="redirect-text">
        ¿No tienes cuenta? 
        <router-link to="/register">Regístrate aquí</router-link>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const email = ref('')
const password = ref('')
const error = ref('')

const router = useRouter()
const auth = useAuthStore()

const login = async () => {
  error.value = ''
  try {
    const success = await auth.login(email.value, password.value)
    if (success) {
      router.push('/dashboard')
    }
  } catch (err) {
    error.value = err.response?.data?.message || err.message || 'Error desconocido'
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f2f4f8;
}

.login-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
}

.login-form h2 {
  margin-bottom: 1rem;
  text-align: center;
}

.login-form input {
  margin-bottom: 1rem;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.login-form button {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.login-form button:hover {
  background: #4338ca;
}

.error {
  color: red;
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
