<script setup>
    import { RouterLink, useRouter } from 'vue-router';

    defineProps({
        href: String
    });
</script>

<template>
    <RouterLink
        v-if="$route.path != href"
        :to="href"
        class="navigation-link"
    >
        <slot />
    </RouterLink>

    <RouterLink
        v-if="$route.path == href"
        :to="href"
        class="navigation-link active"
    >
        <slot />
    </RouterLink>
</template>

<style scoped>
    .navigation-link {
      color: #7c6f64;
      text-decoration: none;
    }

    .active {
        text-decoration: underline;
        text-decoration-thickness: 2px;
    }
</style>