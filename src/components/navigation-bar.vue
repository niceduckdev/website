<script setup>
    import NavigationLink from '@/components/navigation-link.vue';
</script>

<template>
   <nav class="navigation-bar">
      <h1 class="title">niceduck.dev</h1>
      <section class="links">
         <NavigationLink href="/">home</NavigationLink>
         <NavigationLink href="/projects">projects</NavigationLink>
      </section>
   </nav>
</template>

<style scoped>
    .navigation-bar {
      display: flex;
      flex-direction: column;
      gap: 5px;
      min-height: 50px;
    }
    .navigation-bar .title {
      font-size: xx-large;
      color: var(--accent);
    }
    .navigation-bar .links {
      display: flex;
      gap: 10px;
    }
</style>
