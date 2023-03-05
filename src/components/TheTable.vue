<script setup lang="ts">
import type { PropType } from "vue";
import type { TableFields, GetPropertyDetails } from "@/types";
import { useRouter } from 'vue-router';

import BaseColHeading from "@/components/BaseColHeading.vue";

const props = defineProps({
  fields: {
    type: Array as PropType<TableFields[]>,
    required: true,
  },
  data: {
    type: Array as PropType<GetPropertyDetails[]>,
    required: true,
  },
  icon: {
    type: Boolean as PropType<boolean | null>,
    default: null,
    required: false
  },
});

// Emit event
const emit = defineEmits(['sortData']);
const onSort = () => {
  emit('sortData');
};

const router = useRouter();

// Set URL query param on click method
const onPropertySelected = (item: GetPropertyDetails): void => {
  router.push({
    name: 'property-selected',
    query: {
      titleNumber: item.TitleNumber,
      tenure: item.Tenure,
      mapX: item.X,
      mapY: item.Y
    },
  });
};

</script>

<template>
 <section class="table-container">
    <table class="table">
      <thead>
        <tr>
          <template v-for="{ label, key, sort } in props.fields" :key="key">
            <th v-if="sort" :class="{ 'cursor-pointer' : sort }" @click="onSort()">
                <BaseColHeading :icon="icon" :heading="label"/>
            </th>
            <th v-else>
              <BaseColHeading :heading="label"/>
            </th>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :id="item.TitleNumber" :key="item.TitleNumber" tabindex="0" @click="onPropertySelected(item)">
          <td v-for="{ key } in fields" :key="key">
            <slot :value="item[key as keyof GetPropertyDetails]" :item="item">
              {{ item[key as keyof GetPropertyDetails] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style lang="postcss" scoped>
table {
  @apply p-2 table-fixed w-full text-left bg-white;
}
thead {
  @apply bg-primary-300 text-white text-base;
  th {
    @apply border-2 border-neutral-400 p-4 font-medium;
  }
}

tbody {
  tr {
    @apply cursor-pointer hover:bg-primary-100 transition duration-300 ease-out;
  }
  td {
    @apply border-2 border-neutral-400 p-4 text-base;
  }
}
</style>