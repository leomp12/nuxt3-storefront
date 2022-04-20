<template>
<h1>Welcome to Nuxt 3 RC</h1>
<p>Visit <a href="https://v3.nuxtjs.org/">https://v3.nuxtjs.org/</a> to read the documentation</p>
<p>rand: {{ rand }}</p>
</template>

<script setup>
let rand = parseInt(Math.random() * 1000, 10);
</script>
