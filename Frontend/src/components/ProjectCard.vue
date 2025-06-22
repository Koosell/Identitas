<script setup>
import '@/assets/css/ProjectCard.css';

defineProps({
  image: String,
  title: String,
  category: String,
  slug: String, // Prop baru untuk link
});
</script>

<template>
  <RouterLink :to="`/portfolio/${slug}`" class="project-card">
    <img :src="image" :alt="title" class="project-image">
    <div class="project-info">
      <h3 class="project-title">{{ title }}</h3>
      <p class="project-category">{{ category }}</p>
    </div>
  </RouterLink>
</template>