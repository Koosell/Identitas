<script setup>
// Impor komponen-komponen kerangka kita
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue' // <-- Pastikan Footer di-import
import { RouterView } from 'vue-router'
</script>

<template>
  <Navbar />

  <main class="flex-grow">
    <RouterView />
  </main>

  <Footer /> </template>

<style>
/* Untuk memastikan layout ini berfungsi,
  kita juga butuh sedikit style pada #app di main.css
*/
</style>