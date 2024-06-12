import { createApp } from 'vue'; 
import App from './App.vue';
import './bootstrap';
import router from './router';
import './form';
import './axios';

const app = createApp(App);

app.use(router);

app.mount('#app');