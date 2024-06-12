import { createRouter, createWebHistory } from 'vue-router';
import ListaUsuarios from '../components/ListaUsuarios.vue';
import Formulario from '../components/FormularioUser.vue';

const routes = [
  { path: '/', redirect: '/formulario' },
  { path: '/formulario', component: Formulario },
  { path: '/lista-usuarios', component: ListaUsuarios }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;