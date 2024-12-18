<script setup>
import Card from '@/components/card.vue';
import Divider from '@/components/divider.vue';
import Grid from '@/components/grid.vue';
import Section from '@/components/section.vue';
</script>

<script>
    import websites from '@/static/websites.json';
    import games from '@/static/games.json';

    export default {
        data() {
            return { websites, games};
        },
    };
</script>

<template>
	<Section title="websites">
		<p>I started making websites using raw html and css, it was only when I discovered the world of Javascript frameworks that I started to enjoy designing and developing them.
		</p>
        
		<Divider />

        <Grid>
			<Card v-for="website in websites" :key="website.title" :title="website.title" :description="website.description" :image="`${website.title.toLowerCase().replace(' ', '-')}.webp`" :href="website.link" />
        </Grid>
	</Section>

	<Section title="games">
        <p>
            Most of these games were made
            using the Unity game engine.
        </p>

        <p>
            I recommend using the Godot
            game engine because it is
            very user friendly and open source. 
        </p>

        <Divider />

        <Grid>
			<Card v-for="game in games" :key="game.title" :title="game.title" :description="game.description" :image="`${game.title.toLowerCase().replace(' ', '-')}.webp`" :href="game.link" />
        </Grid>
    </Section>
</template>
