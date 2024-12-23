<script setup>
    defineProps({
        href: String
    });
</script>

<template>
	<a v-if="href.startsWith('https://') || href.startsWith('mailto:')" :href="href" target="_blank" class="link">
		<slot />
	</a>
    <RouterLink v-else :to="href" class="link">
        <slot />
    </RouterLink>
</template>

<style scoped>
    .link {
        color: var(--fg);
		transition: 100ms color;
    }
	.link:hover {
		color: var(--accent);
	}
</style>
