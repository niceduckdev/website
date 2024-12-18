<script setup>
import Link from '@/components/link.vue';
import Section from '@/components/section.vue';
</script>

<template>
    <Section title="about me">
        <p>Quack! My name is niceduckdev.</p>
        <p>
            I am a student at KdG Antwerp
            and I love making games, websites and spending time creating other technological stuff.
        </p>
    </Section>

    <Section title="follow me">
        <p>
            You can follow my progress as a
            software developer on
            <Link href="https://github.com/niceduckdev/">
                github
            </Link> and
            <Link href="https://niceduckdev.itch.io/">
                itch.io
            </Link>.
        </p>
    </Section>
</template>
