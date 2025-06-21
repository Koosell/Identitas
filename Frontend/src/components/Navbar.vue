<script setup>
import { RouterLink } from 'vue-router'
import '@/assets/css/Navbar.css'; // <-- Impor CSS untuk Navbar
</script>

<template>
  <header class="header">
    <nav class="nav-container">
      <div class="brand">
        <RouterLink to="/">My Identity</RouterLink>
      </div>
      <ul class="nav-links">
        <li><RouterLink to="/">Beranda</RouterLink></li>
        <li><RouterLink to="/about">Tentang Saya</RouterLink></li>
        <li><RouterLink to="/portfolio">Portofolio</RouterLink></li>
        <li><RouterLink to="/contact">Kontak</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>