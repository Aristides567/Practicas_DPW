<script>
import axios from 'axios';

export default {
  name: 'RegisterPage',
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
      },
      loading: false,
      message: '',
      success: false,
    };
  },
  methods: {
    async handleRegister() {
      if (!this.user.name || !this.user.email || !this.user.password) {
        this.showMessage('Todos los campos son obligatorios', false);
        return;
      }

      if (!this.validateEmail(this.user.email)) {
        this.showMessage('Por favor ingresa un email válido', false);
        return;
      }

      if (this.user.password.length < 6) {
        this.showMessage('La contraseña debe tener al menos 6 caracteres', false);
        return;
      }

      this.loading = true;

      try {
        const response = await axios.post(
          'http://localhost:3000/auth/register',
          this.user
        );

        this.showMessage('Registro exitoso! Redirigiendo...', true);

        // Redirigir después de 2 segundos
        setTimeout(() => {
          this.$router.push('/auth/login'); 
        }, 2000);

      } catch (error) {
        let errorMessage = 'Error en el registro';
        
        this.showMessage(errorMessage, false);
      } finally {
        this.loading = false;
      }
    },
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    showMessage(msg, isSuccess) {
      this.message = msg;
      this.success = isSuccess;
      // Limpiar mensaje después de 5 segundos
      setTimeout(() => {
        this.message = '';
      }, 5000);
    },
  },
};
</script>
<template>
  <div class="register-container">
    <h2>Crear una cuenta</h2>
    <form @submit.prevent="handleRegister" class="register-form">
      <div class="form-group">
        <label for="name">Nombre completo</label>
        <input
          type="text"
          id="name"
          v-model="user.name"
          required
          placeholder="Ej: Juan Pérez"
        />
      </div>

      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          v-model="user.email"
          required
          placeholder="Ej: usuario@example.com"
        />
      </div>

      <div class="form-group">
        <label for="password">Contraseña</label>
        <input
          type="password"
          id="password"
          v-model="user.password"
          required
          placeholder="Mínimo 6 caracteres"
          minlength="6"
        />
      </div>

      <button type="submit" :disabled="loading" class="register-btn">
        <span v-if="!loading">Registrarse</span>
        <span v-else>Procesando...</span>
      </button>

      <div v-if="message" :class="['message', success ? 'success' : 'error']">
        {{ message }}
      </div>
    </form>
  </div>
</template>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #42b983;
  outline: none;
}

.register-btn {
  width: 100%;
  padding: 0.75rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;
}

.register-btn:hover {
  background-color: #3aa876;
}

.register-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.message {
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 4px;
  text-align: center;
}

.success {
  background-color: #d4edda;
  color: #155724;
}

.error {
  background-color: #f8d7da;
  color: #721c24;
}
</style>