<script setup lang="ts">
</script>

<template>
  <section class="btn-container">
    <slot />
  </section>
</template>

<style lang="postcss" scoped>
.btn-container {
  @apply flex flex-row items-end h-full justify-between py-6;
}
</style>