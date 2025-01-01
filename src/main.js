import { createApp } from 'vue'
import App from './App.vue'
import './css/app.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
createApp(App).mount('#app')
