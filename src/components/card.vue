<script setup>
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';

    const props = defineProps({
        image: String,
        title: String,
        description: String,
        href: String
    });
</script>

<template>
    <a :href="href" target="_blank" class="article">
		<section class="image" :style="`background-image: url(/images/${props.image})`" />
        <section class="information">
            <h3 class="title">{{ title }}</h3>
            <p class="description">{{ description }}</p>
        </section>
    </a>
</template>

<style scoped>
    .article {
        display: flex;
        flex-direction: column;
        gap: 5px;

		color: var(--fg);
		text-decoration: none;
		transition: 100ms color;
    }

	.article:hover {
		color: var(--accent);
	}

    .article .image {
        height: 125px;
        border-radius: 10px;
        background-size: cover;
    }

    .article .information {
        display: flex;
        flex-direction: column;
    }

	.article .information .title {
		font-weight: 800;
	}

    .article .information .description {
        font-size: medium;
    }
</style>
