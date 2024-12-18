<script setup>
import Link from '@/components/link.vue';
</script>

<template>
    <footer class="footer">
		<div>
			<Link href="/">niceduck.dev</Link>
			{{ new Date().getFullYear() }}
		</div>
	</footer>
</template>

<style scoped>
    .footer {
        display: flex;
        flex-direction: column;
        justify-content: end;
        min-height: 50px;
    }
</style>
