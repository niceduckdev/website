<script setup>
import { RouterView } from 'vue-router';
import NavigationBar from './components/navigation-bar.vue';
import Footer from './components/footer.vue';
</script>

<template>
  <NavigationBar />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>