<script setup lang="ts">
const props = defineProps({
  isDisabled: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: 'Next page',
  },
  chevron: {
    type: String,
    default: 'right',
  },
});
</script>

<template>
  <button role=”button” class="btn" :disabled="props.isDisabled">
    <svg v-if="props.chevron === 'left'" class="mr-1 -ml-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
    {{ text }}
    <svg v-if="props.chevron === 'right'" class="ml-1 -mr-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
  </button>
</template>

<style lang="postcss" scoped>
.btn {
  @apply text-base text-white font-medium p-3.5 cursor-pointer bg-primary-300 hover:cursor-pointer hover:bg-secondary-100 disabled:bg-neutral-300 disabled:cursor-not-allowed items-center flex justify-center text-center transition duration-200 ease-out;
  svg {
    @apply w-6
  }
}
</style>