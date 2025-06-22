<script setup>
// Mengimpor file CSS untuk halaman ini
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
          <h2 class="profile-card-name">Nazal Syamaidzar Mahendra</h2>
          <p class="profile-card-title">Full Stack Developer</p>
          <p class="profile-card-location">Temanggung, Indonesia</p>

          <hr class="divider">

          <div class="social-links">
    <a href="https://website-anda.com" target="_blank" rel="noopener noreferrer" class="social-link">
      <svg xmlns="http://www.w3.org/2000/svg" class="social-link-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" /></svg>
      <span>Website Pribadi</span>
    </a>

    <a href="https://github.com/Koosell" target="_blank" rel="noopener noreferrer" class="social-link">
      <svg xmlns="http://www.w3.org/2000/svg" class="social-link-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /></svg>
      <span>Github</span>
    </a>
    
    <a href="https://www.linkedin.com/in/nama-anda/" target="_blank" rel="noopener noreferrer" class="social-link" style="pointer-events: none; opacity: 0.5;">
      <svg xmlns="http://www.w3.org/2000/svg" class="social-link-icon" viewBox="0 0 448 512" fill="currentColor"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
      <span>LinkedIn</span>
    </a>
    
    <a href="https://www.instagram.com/nzlsym_?igsh=OWEzMmNnZnl3ZWFp" target="_blank" rel="noopener noreferrer" class="social-link">
      <svg xmlns="http://www.w3.org/2000/svg" class="social-link-icon" fill="currentColor" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
      <span>Instagram</span>
    </a>
    
    <a href="https://wa.me/62895392917289" target="_blank" rel="noopener noreferrer" class="social-link">
      <svg xmlns="http://www.w3.org/2000/svg" class="social-link-icon" fill="currentColor" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
      <span>WhatsApp</span>
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
            <span class="info-value">nasalzamaizzar29@gmail.com</span>
          </div>
          <div class="info-row">
            <span class="info-label">Phone</span>
            <span class="info-value">0895-3929-17289</span>
          </div>
          <div class="info-row">
            <span class="info-label">Mobile</span>
            <span class="info-value">0895-3929-17289</span>
          </div>
          <div class="info-row">
            <span class="info-label">Address</span>
            <span class="info-value">Temanggung, Jawa Tengah, Indonesia</span>
          </div>
        </div>
        
        <div class="info-card">
            <h3 class="about-card-title">Tentang Saya</h3>
            <p class="about-card-text">
             Saya adalah seorang pengembang web sekaligus desainer dengan keahlian yang mencakup pembangunan aplikasi dari sisi front-end hingga back-end. Saya mahir menggunakan React untuk menciptakan antarmuka yang dinamis, Laravel untuk membangun sistem back-end yang kuat, serta memiliki penguasaan teknologi lainnya seperti HTML, CSS, JavaScript, dan framework tambahan yang mendukung pengembangan web secara menyeluruh. Selain itu, saya juga kompeten dalam desain, dengan pengalaman menggunakan Figma untuk merancang antarmuka pengguna, serta kemampuan membuat poster, logo, dan berbagai elemen desain grafis lainnya termasuk ilustrasi dan branding. Sebagai mahasiswa, saya aktif menyeimbangkan studi dengan proyek-proyek praktis, dan saya selalu bersemangat untuk mempelajari teknologi baru guna mengembangkan solusi digital yang efisien, elegan, dan inovatif.
            </p>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
/* File CSS untuk halaman ini diimpor melalui <script setup> di atas, 
  yaitu dari file: src/assets/css/AboutView.css
*/
</style>