<script setup lang="ts">
import { onMounted, computed } from "vue";
import type { TableFields } from "@/types";
import { propertyDetails } from "@/stores/usePropertyDetails";
import { Status } from "@/enums/status";
import { useGlobalSettings } from "@/stores/useGlobalSettings";

import BaseWrapper from "@/components/BaseWrapper.vue";
import ThePropertyList from "@/components/ThePropertyList.vue";
import BaseError from "@/components/BaseError.vue";

const store = propertyDetails();
const globalSettings = useGlobalSettings();
const propertyData = computed(() => store.propertyDetails);
const globalStatus = computed(() => globalSettings.status);

const tableFields: TableFields[] = [
  { key: 'TitleNumber', label: 'Title number', sort: true, },
  { key: 'Tenure', label: 'Class of Title', sort: false },
];

onMounted(() => {
	store.getPropertyDetails(
    import.meta.env.VITE_TEST_DATA_URL, false
  );
});
</script>

<template>
  <BaseWrapper>
    <ThePropertyList v-if="globalStatus === Status.SUCCESS" :fields="tableFields" :data="propertyData" />
    <BaseError v-else-if="globalStatus === Status.FAILED" />
  </BaseWrapper>
</template>
