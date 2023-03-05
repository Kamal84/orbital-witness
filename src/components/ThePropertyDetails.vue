<script setup lang="ts">
import { reactive } from "vue";
import { useRouter, useRoute  } from 'vue-router';

import BaseButton from "@/components/BaseButton.vue";
import BaseButtonContainer from "@/components/BaseButtonContainer.vue";
import TheMap from "@/components/TheMap.vue";


const route = useRoute();

// Query URL string to obtain properties
const query = reactive({
  TitleNumber: route?.query?.titleNumber,
  Tenure: route?.query?.tenure,
  X: Number(route?.query?.mapX),
  Y: Number(route?.query?.mapY),
});

const router = useRouter();
const onBack = () => router.push('/');

</script>

<template>
  <section class="property-container">
    <aside class="content">
      <hgroup>
        <h2>{{ query?.TitleNumber }}</h2>
        <h3>{{ query?.Tenure }}</h3>
      </hgroup>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam enim beatae temporibus esse hic laudantium eos dolorum illo aspernatur autem ut nihil ducimus qui id asperiores debitis, mollitia necessitatibus repudiandae.</p>
    </aside>
    <TheMap :map-x="query?.X" :map-y="query?.Y" />
  </section>
    <BaseButtonContainer>
      <BaseButton text="Previous page" chevron="left" aria-label="Previous page" @click="onBack()">Previous page</BaseButton>
    </BaseButtonContainer>
</template>

<style lang="postcss" scoped>
.property-container {
  @apply flex flex-col lg:flex-row;
  .content {
    @apply lg:w-4/12 lg:pr-8;
  }
  .map {
    @apply bg-neutral-500 h-40 lg:h-full w-full lg:w-8/12 mt-8 lg:mt-0;
  }
}
hgroup {
  @apply flex flex-row items-center justify-between mb-6;
  h2 {
    @apply text-2xl mr-8 font-medium;
  }
  h3 {
    @apply bg-secondary-100 text-white border-0 border-neutral-400 px-4 py-2 rounded-xl;
  }
}
</style>