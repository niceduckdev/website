<script setup>
    defineProps({
        title: String
    });
</script>

<template>
    <section class="section">
        <h2 class="header">{{ title }}</h2>
        <slot />
    </section>
</template>

<style scoped>
    .section {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .section .header {
        color: #ebdbb2;
    }
</style>