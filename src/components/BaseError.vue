<script setup lang="ts">
</script>

<template>
  <section role="status" class="error-container">
    <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 0 24 24" width="44px" fill="#B62723"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
    <p>Oh no something went wrong!</p>
  </section>
</template>

<style lang="postcss" scoped>
.error-container {
  @apply flex flex-col h-full justify-center items-center;
  svg {
    @apply mb-4;
  }
  p {
    @apply text-warning-dark;
  }
}
</style>