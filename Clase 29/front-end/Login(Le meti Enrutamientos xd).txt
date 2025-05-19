<script>
import axios from 'axios';

export default {
  name: 'LoginPage',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      showPassword: false,
      loading: false,
      message: '',
      success: false,
    };
  },
  methods: {
    async handleLogin() {
      if (!this.user.email || !this.user.password) {
        this.showMessage('Todos los campos son obligatorios', false);
        return;
      }

      if (!this.validateEmail(this.user.email)) {
        this.showMessage('Por favor ingresa un email válido', false);
        return;
      }

      this.loading = true;

      try {
        const response = await axios.post(
          'http://localhost:3000/auth/login',
          this.user
        ); 

          this.showMessage('Inicio de sesión exitoso! Redirigiendo...', true);
          
          setTimeout(() => {
            this.$router.push('/dashboard');
          }, 1500);

      } catch (error) {
        let errorMessage = 'Error al iniciar sesión';

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
      setTimeout(() => {
        this.message = '';
      }, 5000);
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>
<template>
  <div class="login-container">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="handleLogin" class="login-form">
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
        <div class="password-input">
          <input
            :type="showPassword ? 'text' : 'password'"
            id="password"
            v-model="user.password"
            required
            placeholder="Ingresa tu contraseña"
          />
          <button type="button" class="toggle-password" @click="togglePassword">
            {{ showPassword ? '👁️' : '👁️‍🗨️' }}
          </button>
        </div>
      </div>

      <button type="submit" :disabled="loading" class="login-btn">
        <span v-if="!loading">Iniciar Sesión</span>
        <span v-else>
          <span class="spinner"></span> Procesando...
        </span>
      </button>

      <div class="additional-options">
        <a>¿Olvidaste tu contraseña?</a>
        <a>¿No tienes cuenta? Regístrate</a>
      </div>

      <div v-if="message" :class="['message', success ? 'success' : 'error']">
        {{ message }}
      </div>
    </form>
  </div>
</template>

<style scoped>
.login-container {
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
  margin-bottom: 1.5rem;
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

.password-input {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0 5px;
}

.login-btn {
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

.login-btn:hover {
  background-color: #3aa876;
}

.login-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.spinner {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.additional-options {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
}

.additional-options a {
  color: #42b983;
  text-decoration: none;
  font-size: 0.9rem;
}

.additional-options a:hover {
  text-decoration: underline;
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