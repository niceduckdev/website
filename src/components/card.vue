<script setup>
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';

    const props = defineProps({
        image: String,
        title: String,
        description: String,
        href: String
    });
    const imagePath = ref(`background-image: url('/images/${props.image}');`);
    const page = props.href.startsWith('/');
</script>

<template>
    <article class="article">
        <RouterLink
            :to="href"
            class="image"
            :style="imagePath"
            v-if="page"
        />
        <a
            :href="href"
            target="_blank"
            class="image"
            :style="imagePath"
            v-if="!page"
        />
        
        <section class="information">
            <h3 class="title">{{ title }}</h3>
            <p class="description">{{ description }}</p>
        </section>
    </article>
</template>

<style scoped>
    .article {
        display: flex;
        flex-direction: column;
        gap: 5px;
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
