<script setup>
import { ref, computed } from 'vue';
import '@/assets/css/PortfolioView.css';
import ProjectCard from '@/components/ProjectCard.vue';
// Mengimpor data dari file terpisah
import { projects as allProjects } from '@/data/projects.js';

const categories = ref([
  { name: 'Semua Proyek', slug: 'all' },
  { name: 'Desain Logo', slug: 'logo-design' },
  { name: 'Web Development', slug: 'web-dev' },
  { name: 'UI/UX', slug: 'ui-ux' },
]);

const activeCategory = ref('all');
const projects = ref(allProjects); // Gunakan data yang diimpor

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects.value;
  }
  return projects.value.filter(project => project.categorySlug === activeCategory.value);
});

const setActiveCategory = (slug) => {
  activeCategory.value = slug;
};
</script>

<template>
  <div class="portfolio-page">
    <header class="page-header">
      <h1 class="page-title">Portofolio</h1>
      <p class="page-subtitle">Berikut adalah kumpulan proyek yang telah saya kerjakan, menunjukkan keahlian saya dalam pengembangan web dan desain.</p>
    </header>

    <div class="filter-buttons">
      <button
        v-for="category in categories"
        :key="category.slug"
        @click="setActiveCategory(category.slug)"
        :class="{ 'active': activeCategory === category.slug }"
        class="filter-button"
      >
        {{ category.name }}
      </button>
    </div>

    <div class="portfolio-grid">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :image="project.image"
        :title="project.title"
        :category="project.category"
        :slug="project.slug"
      />
    </div>
  </div>
</template>