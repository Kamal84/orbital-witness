<script setup lang="ts">
import { computed } from 'vue';
import { RouterView } from 'vue-router';
import { Status } from "@/enums/status";
import { useGlobalSettings } from "@/stores/useGlobalSettings";

import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import BaseLoader from "@/components/BaseLoader.vue";
const globalSettings = useGlobalSettings();
const globalStatus = computed(() => globalSettings.status);

</script>

<template>
  <TheHeader />

  <BaseLoader v-if="globalStatus === Status.LOADING"/>
  <RouterView />
  
  <TheFooter />
</template>

<style lang="postcss" scoped>
</style>
