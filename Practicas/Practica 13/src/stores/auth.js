import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null,
  }),

  actions: {
    async login(email, password) {
      // Simulación de API
      if (email === 'admin' && password === 'admin') {
        this.token = 'fake-jwt-token'
        this.user = { name: 'Admin', email }
        localStorage.setItem('token', this.token)
        return true
      }
      return false
    },

    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')
    },
  },
})
