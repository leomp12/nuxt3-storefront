<script setup>
  let description = 'Description ...';
  if (process.server) {
    description = await new Promise((resolve) => {
      console.log('Loading description...');
      setTimeout(() => {
        resolve('<h1>Hello Nuxt 3</h1><h3>Storefront PoC With Vue 3</h3>');
      }, 200);
    });
  }
</script>

<template>
  <div v-html="description"></div>
</template>
