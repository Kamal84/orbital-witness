<script setup lang="ts">
</script>

<template>
  <section class="loader-container">
    <div class="loader-section">
      <div
        class="spinner"
        role="status">
      </div>
      <p>
        Loading page...
      </p>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.loader-container {
  @apply flex h-full justify-center;
  .loader-section {
    @apply flex flex-col items-center justify-center;
    .spinner {
      @apply inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-300 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_2s_linear_infinite];
      p {
        @apply mt-4 mr-auto ml-auto px-5 text-primary-300
      }
    }
  }
}
</style>