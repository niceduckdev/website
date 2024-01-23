<script setup>
    defineProps({
        href: String
    });
</script>

<template>
    <a :href="href" target="_blank" class="link">
        <slot />
    </a>
</template>

<style scoped>
    .link {
        color: #d79921;
    }
</style>