<script setup>
import { useRoute, RouterLink } from 'vue-router';
import { computed } from 'vue';
// Impor data proyek kita dari file terpisah
import { projects } from '@/data/projects.js';
// Impor file CSS untuk halaman ini
import '@/assets/css/ProjectDetailView.css';

const route = useRoute();
// Ambil slug dari URL (misal: 'sistem-reservasi-restoran')
const projectSlug = route.params.slug;

// Cari proyek yang sesuai di dalam data kita berdasarkan slug
const project = computed(() => {
  return projects.find(p => p.slug === projectSlug);
});
</script>

<template>
  <div class="project-detail-page">
    <div v-if="project" class="detail-container">
      <RouterLink to="/portfolio" class="back-link">&larr; Kembali ke Portofolio</RouterLink>
      <h1 class="project-title-detail">{{ project.title }}</h1>
      <p class="project-category-detail">{{ project.category }}</p>
      
      <img :src="project.image" :alt="project.title" class="project-main-image">

      <div class="project-content">
        <h2 class="section-heading">Tentang Proyek</h2>
        <p class="project-description">{{ project.description }}</p>
        
        <h2 class="section-heading">Teknologi yang Digunakan</h2>
        <div class="tech-tags">
          <span v-for="tech in project.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
        </div>

        <div class="project-links">
          <a v-if="project.liveUrl && project.liveUrl !== '#'" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="project-link-button">Lihat Live Demo</a>
          <a v-if="project.repoUrl && project.repoUrl !== '#'" :href="project.repoUrl" target="_blank" rel="noopener noreferrer" class="project-link-button secondary">Lihat Kode</a>
        </div>
      </div>
    </div>
    <div v-else class="not-found">
      <h1 class="not-found-title">404 - Proyek Tidak Ditemukan</h1>
      <p>Maaf, proyek yang Anda cari tidak ada atau URL-nya salah.</p>
      <RouterLink to="/portfolio" class="cta-button">Kembali ke Portofolio</RouterLink>
    </div>
  </div>
</template>