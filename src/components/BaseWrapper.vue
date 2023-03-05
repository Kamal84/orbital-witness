<script setup lang="ts">
const props = defineProps({
	largeWrapper: {
		type: Boolean,
		default: false
	}
});
</script>

<template>
	<main class="sectionWrapper" :class="[props.largeWrapper ? 'lg:w-11/12' : 'lg:w-6/12']">
		<slot />
	</main>
</template>

<style lang="postcss" scoped>
.sectionWrapper {
	@apply flex flex-col flex-auto mx-auto text-black p-6;
}
</style>