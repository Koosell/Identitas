import '@/assets/css/main.css'; // Import CSS kita

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router' // Import router yang sudah kita buat

// Membuat aplikasi Vue
const app = createApp(App)

// Menggunakan plugin yang sudah kita install
app.use(createPinia())
app.use(router) // <-- INI KEMUNGKINAN BESAR BARIS YANG HILANG

// "Memasang" aplikasi kita ke elemen #app di index.html
app.mount('#app')