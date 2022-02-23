<template>
  <div class="sf-heading">
    <slot name="title">
      <component
        :is="`h${level}`"
        class="sf-heading__title"
      >
        {{ title }}
      </component>
    </slot>
    <slot name="description">
      <div class="sf-heading__description">
        {{ description }}
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "SfHeading",
  props: {
    level: {
      type: Number,
      default: 2,
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
@import "@storefront-ui/shared/styles/components/atoms/SfHeading.scss";
</style>
