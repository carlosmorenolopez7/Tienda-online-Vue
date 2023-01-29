import { createApp } from 'vue';
import { VueFire, VueFireAuth } from 'vuefire';
import router from './router';
import App from './App.vue';
import './assets/main.css'

const miapp = createApp(App);
miapp.use(router).mount('#contenedor-body')
