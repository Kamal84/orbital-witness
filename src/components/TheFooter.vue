<script setup lang="ts">
const props = defineProps({
	content: {
		type: String,
		default: '© 2023 Orbital Witness Limited. All Rights Reserved. Registered in England and Wales 10732703.'
	},
});
</script>

<template>
  <footer>
    <p>{{ props.content }}</p>
  </footer>
</template>

<style lang="postcss" scoped>
footer {
  @apply py-3.5 px-6 bg-primary-300 text-white text-sm;
  p {
    @apply text-center;
  }
}
</style>