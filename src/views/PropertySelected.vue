<script setup lang="ts">
import { onMounted } from "vue";
import { useGlobalSettings } from "@/stores/useGlobalSettings";
import { Status } from "@/enums/status";

import BaseWrapper from "@/components/BaseWrapper.vue";
import ThePropertyDetails from "@/components/ThePropertyDetails.vue";

onMounted(() => {
  // Remove Loading status - required here to avoid errors in unit testing
  const globalSettings = useGlobalSettings();
  globalSettings.setStatus(Status.SUCCESS);
});
</script>

<template>
  <BaseWrapper :large-wrapper="true">
    <ThePropertyDetails />
  </BaseWrapper>
</template>

<style lang="postcss" scoped></style>