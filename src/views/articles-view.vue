<script setup>
import Card from '@/components/card.vue';
import Grid from '@/components/grid.vue';
import Section from '@/components/section.vue';
</script>

<template>
    <Section>
        <Grid>
            <Card
                image="potatowars.webp"
                title="potatowars"
                description="A fun couch co-op game where you play as a potato."
                href="/articles/this-is-a-test"
            />
        </Grid>
    </Section>
</template>