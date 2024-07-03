<script setup>
  const props = defineProps(["title", "subtitle"])
</script>

<template>
  <div class="">
    <h1 class="text-neutral-100 text-4xl font-[700] capitalize">{{ title }}</h1>
    <p class="mt-4 text-neutral-400">{{ subtitle }}</p>
  </div>
</template>