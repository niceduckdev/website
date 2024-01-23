<script setup>
import Card from '@/components/card.vue';
import Divider from '@/components/divider.vue';
import Grid from '@/components/grid.vue';
import Section from '@/components/section.vue';
</script>

<template>
    <Section title="games">
        <p>
            All of these games were made
            using the Unity game engine.
        </p>

        <p>
            I recommend using the Godot
            game engine because it is
            very user friendly and open source. 
        </p>

        <Divider />

        <Grid>
            <Card
                image="potatowars.webp"
                title="potatowars"
                description="A fun couch co-op game where you play as a potato."
                href="https://niceduckdev.itch.io/potatowars"
            />
            <Card
                image="boomeranger.webp"
                title="boomeranger"
                description="An endless wave game made for the Weekly Game Jam."
                href="https://niceduckdev.itch.io/boomeranger"
            />
            <Card
                image="side.webp"
                title="side"
                description="A platformer game made for the Geojam."
                href="https://niceduckdev.itch.io/side"
            />
            <Card
                image="tinyboat.webp"
                title="tinyboat"
                description="A frustrating boat game made for the Weekly Game Jam."
                href="https://niceduckdev.itch.io/tiny-boat"
            />
        </Grid>
    </Section>
</template>