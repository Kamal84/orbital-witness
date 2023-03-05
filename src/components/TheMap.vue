<script setup lang="ts">
import { computed, type ComputedRef } from 'vue';
import { GoogleMap, Marker } from 'vue3-google-map';

const props = defineProps({
  mapX: {
    type: Number,
    required: true,
  },
  mapY: {
    type: Number,
    required: true,
  },
});

// Google maps config
const center = { lat: props.mapY, lng: props.mapX };
const googleApiKey: ComputedRef<string> = computed(() => import.meta.env.VITE_GOOGLE_MAPS_KEY);
</script>

<template>
  <GoogleMap
    :api-key="googleApiKey"
    :center="center"
    :zoom="15"
    class="google-map"
    >
      <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<style lang="postcss" scoped>
.google-map {
  @apply w-full h-72 sm:h-[400px] md:h-[460px] lg:h-[600px] mt-6 lg:mt-0;
}
</style>