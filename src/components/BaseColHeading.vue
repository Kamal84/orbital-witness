<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  icon: {
    type: Boolean as PropType<boolean | null>,
    default: null,
    required: false
  },
  heading: {
    type: String,
    default: ''
  },
});
</script>

<template>
  <span>
    {{ props.heading }}
    <svg v-if="props.icon === true" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="18px" fill="#ffffff"><rect fill="none" height="18" width="18"/><path d="M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z"/></svg>

    <svg v-else-if="props.icon === false" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="18px" fill="#ffffff"><rect fill="none" height="18" width="18"/><path d="M19,15l-1.41-1.41L13,18.17V2H11v16.17l-4.59-4.59L5,15l7,7L19,15z"/></svg>
  </span>
</template>

<style lang="postcss" scoped>
span {
  @apply flex justify-between items-center;
}
</style>