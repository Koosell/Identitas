<script setup>
// INI BAGIAN YANG HILANG: Impor file CSS untuk halaman ini
import '@/assets/css/AboutView.css';
</script>

<template>
  <div class="page-container">
    <div class="main-layout">

      <div class="profile-sidebar">
        <div class="profile-card">
          <img 
            src="@/assets/images/profil.jpg" 
            alt="Foto Profil Nazal Mahendra"
            class="profile-card-image"
          >
          <h2 class="profile-card-name">Nazal S. Mahendra</h2>
          <p class="profile-card-title">Full Stack Developer</p>
          <p class="profile-card-location">Tasikmalaya, Indonesia</p>

          <hr class="divider">

          <div class="social-links">
            <a href="#" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" /></svg>
              <span>Website Pribadi</span>
            </a>
            <a href="#" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /></svg>
              <span>Github</span>
            </a>
             <a href="#" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <div class="main-content">
        <div class="info-card">
          <div class="info-row">
            <span class="info-label">Full Name</span>
            <span class="info-value">Nazal Syamaidzar Mahendra</span>
          </div>
          <div class="info-row">
            <span class="info-label">Email</span>
            <span class="info-value">email.pribadi@example.com</span>
          </div>
          <div class="info-row">
            <span class="info-label">Phone</span>
            <span class="info-value">(+62) 812-3456-7890</span>
          </div>
          <div class="info-row">
            <span class="info-label">Mobile</span>
            <span class="info-value">(+62) 812-3456-7890</span>
          </div>
          <div class="info-row">
            <span class="info-label">Address</span>
            <span class="info-value">Tasikmalaya, Jawa Barat, Indonesia</span>
          </div>
        </div>
        
        <div class="info-card">
            <h3 class="about-card-title">Tentang Saya</h3>
            <p class="about-card-text">
              Saya adalah seorang pengembang web dengan keahlian dalam membangun aplikasi dari sisi front-end hingga back-end. Saya memiliki pengalaman dengan Vue.js untuk antarmuka yang dinamis dan Laravel untuk sistem back-end yang kuat. Saya selalu antusias untuk belajar teknologi baru dan menerapkannya untuk menciptakan solusi digital yang efisien dan elegan.
            </p>
        </div>
      </div>

    </div>
  </div>
</template>