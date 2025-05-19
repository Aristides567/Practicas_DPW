import { createRouter, createWebHistory } from "vue-router";

import Register from "../src/components/Register.vue";
import Login from "../src/components/Login.vue";
import Home from "../src/components/Home.vue";

const routes = [
    {path: '/', name: 'Registros', component: Register},
    {path: '/dashboard', name: 'Panel de Control', component: Home},
    {path: '/auth/login', name: 'Iniciar Sesion', component: Login},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router