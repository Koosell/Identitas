<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import '@/assets/css/Navbar.css';

// Variabel untuk melacak status menu mobile (terbuka/tertutup)
const isMenuOpen = ref(false);

// Fungsi untuk mengubah status menu (jika tertutup jadi terbuka, begitu sebaliknya)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="header">
    <nav class="nav-container">
      <div class="brand">
        <RouterLink to="/">IDENTITAS SAYA</RouterLink>
      </div>

      <button @click="toggleMenu" class="hamburger-button">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <ul class="nav-links" :class="{ 'active': isMenuOpen }">
        <li><RouterLink to="/" @click="isMenuOpen = false">Beranda</RouterLink></li>
        <li><RouterLink to="/about" @click="isMenuOpen = false">Tentang Saya</RouterLink></li>
        <li><RouterLink to="/portfolio" @click="isMenuOpen = false">Portofolio</RouterLink></li>
        <li><RouterLink to="/contact" @click="isMenuOpen = false">Kontak</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>