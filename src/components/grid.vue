<template>
    <section class="grid">
        <slot />
    </section>
</template>

<style scoped>
    .grid {
        display: grid;
        gap: 15px;
        
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 550px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }
</style>