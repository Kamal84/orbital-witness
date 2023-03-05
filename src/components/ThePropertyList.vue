<script setup lang="ts">
import { computed, reactive, ref, watch, type ComputedRef, type PropType } from "vue";
import type { TableFields, GetPropertyDetails, Pagination } from "@/types";

import BaseButton from "@/components/BaseButton.vue";
import BaseButtonContainer from "@/components/BaseButtonContainer.vue";
import TheTable from "@/components/TheTable.vue";

const props = defineProps({
  fields: {
    type: Array as PropType<TableFields[]>,
    required: true,
  },
  data: {
    type: Array as PropType<GetPropertyDetails[]>,
    required: true,
  },
});

// null, true, false
const sortDesc = ref<null | boolean>(null);

// default pagination settings
const pagination: Pagination = reactive({
  currPage: 1,
  showRows: 5,
  totalPages: computed(() => Math.ceil(props.data.length / pagination.showRows))
});

// set sortDesc on click
const onSort = (): void => {
    if (sortDesc.value === true) sortDesc.value = null;
    else if (sortDesc.value === false) sortDesc.value = true;
    else sortDesc.value = false;
};

// sort items
const sortedItems: ComputedRef<GetPropertyDetails[]> = computed(() => {
  const { data } = props;
  if (sortDesc.value === null) return data;
  
  if (sortDesc.value) {
    return data.sort((a,b) => a.TitleNumber < b.TitleNumber ? -1 : 1);
  } else {
    return data.sort((a,b) => a.TitleNumber > b.TitleNumber ? -1 : 1);
  }
});

// Show pagination logic
const paginatedItems: ComputedRef<GetPropertyDetails[]> = computed(() => {
  const { currPage, showRows } = pagination;
  const start = (currPage - 1) * showRows;
  const stop = start + showRows;
  return sortedItems.value.slice(start, stop);
});

watch(
  () => pagination.totalPages,
  () => (pagination.currPage = 1)
);
</script>

<template>
  <TheTable :fields="fields" :data="paginatedItems" :icon="sortDesc" @sort-data="onSort" />

  <BaseButtonContainer>
    <BaseButton 
      :is-disabled="pagination.currPage <= 1" 
      text="Previous page" chevron="left" aria-label="Previous page" @click="pagination.currPage--" />
    <BaseButton 
      :is-disabled="pagination.currPage >= pagination.totalPages" aria-label="Next page" @click="pagination.currPage++" />
  </BaseButtonContainer>
</template>

<style lang="postcss" scoped></style>