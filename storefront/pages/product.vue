<template>
<div>
  <div v-html="description"></div>
  <hr>
  <h4>Client side content here !!</h4>
</div>
</template>

<script setup>
import api from '@cloudcommerce/api';

let description = 'Mocked description ...';
if (process.server) {
  console.log('Loading product description ...');
  const { data } = await api.get('products/5c701c8ac626be23430d4fe5', {
    storeId: 1011,
  });
  description = data.body_html;
}
</script>
