<template>
    <footer class="footer">
        niceduckdev {{ new Date().getFullYear() }}
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