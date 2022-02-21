<script setup>
  import ecomUtils from '@ecomplus/utils/dist/ecom-utils.node.min';
  import ecomClient from '@ecomplus/client/dist/ecom-client.node.js';

  let description = 'Mocked description ...';
  if (process.server) {
    console.log('Loading product description ...');
    ecomUtils.$ecomConfig.set('store_id', 1024);
    const { data } = await ecomClient.store({
      url: '/products/5d09197e24607a6a42d7140d',
    });
    description = data.body_html;
  }
</script>

<template>
  <div v-html="description"></div>
</template>
