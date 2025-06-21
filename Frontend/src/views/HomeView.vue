<script setup>
import { RouterLink } from 'vue-router';
// Impor file CSS untuk halaman ini
import '@/assets/css/HomeView.css'; 
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <div class="text-column">
        <h1 class="title">Halo, Saya Nazal Mahendra</h1>
        <p class="description">
          Seorang Web Developer yang bersemangat dalam menciptakan aplikasi web yang modern, responsif, dan fungsional.
        </p>
        <RouterLink to="/portfolio" class="cta-button">
          Lihat Portofolio Saya
        </RouterLink>
      </div>
      <div class="image-column">
        <div class="profile-image-container">
            <img 
              src="@/assets/images/profil.jpg" 
              alt="Foto Profil Nazal Mahendra"
              class="profile-image"
            >
        </div>
      </div>
    </div>
  </section>

  <section class="services">
    <div class="services-container">
      <h2 class="section-title">Layanan Saya</h2>
      <p class="section-subtitle">Solusi digital yang saya tawarkan untuk membantu proyek Anda.</p>
      
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
          </div>
          <h3 class="service-title">Front-End Development</h3>
          <p class="service-description">Membangun antarmuka pengguna yang interaktif dan responsif dengan teknologi modern seperti Vue.js.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75h-10.5a2.25 2.25 0 00-2.25 2.25v7.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </div>
          <h3 class="service-title">Back-End Development</h3>
          <p class="service-description">Merancang dan mengembangkan sistem sisi server yang kuat dan aman menggunakan framework Laravel.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c.251.042.502.092.752.148v5.714a2.25 2.25 0 00.659 1.591L14.25 14.5M9.75 3.104a2.25 2.25 0 00-1.5 2.153v5.714c0 .597.237 1.17.659 1.591L9.75 14.5M14.25 14.5L19 19.25l-4.75-4.75M14.25 14.5l-4.75 4.75" /></svg>
          </div>
          <h3 class="service-title">UI/UX Design</h3>
          <p class="service-description">Membuat desain antarmuka yang tidak hanya indah secara visual, tetapi juga intuitif dan mudah digunakan.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="projects">
      <div class="projects-container">
          <h2 class="section-title">Proyek Unggulan</h2>
          <p class="section-subtitle">Beberapa karya pilihan yang pernah saya kerjakan.</p>
          
          <div class="projects-grid">
              <a href="#" class="project-card">
                  <img src="https://placehold.co/600x400/e0e7ff/4338ca?text=Proyek+Satu" alt="Gambar Proyek 1" class="project-image">
                  <div class="project-info">
                      <h3 class="project-title">Nama Proyek Keren</h3>
                      <p class="project-category">Web Development</p>
                  </div>
              </a>
              <a href="#" class="project-card">
                  <img src="https://placehold.co/600x400/e0e7ff/4338ca?text=Proyek+Dua" alt="Gambar Proyek 2" class="project-image">
                  <div class="project-info">
                      <h3 class="project-title">Aplikasi Inovatif</h3>
                      <p class="project-category">UI/UX & Frontend</p>
                  </div>
              </a>
              <a href="#" class="project-card">
                  <img src="https://placehold.co/600x400/e0e7ff/4338ca?text=Proyek+Tiga" alt="Gambar Proyek 3" class="project-image">
                  <div class="project-info">
                      <h3 class="project-title">Sistem Manajemen</h3>
                      <p class="project-category">Full-Stack</p>
                  </div>
              </a>
          </div>
      </div>
  </section>
</template>